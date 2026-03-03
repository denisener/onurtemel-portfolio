#!/bin/bash
#
# Deploy paketi oluşturma scripti
# Kullanım: bash build-package.sh
#
# Bu script:
# 1. vendor/ bağımlılıklarını dahil eder (composer install gerekmez)
# 2. Next.js standalone build yapar (npm install gerekmez)
# 3. Tek bir .tar.gz dosyası oluşturur
# 4. Sunucuya yükleyip "bash setup.sh" çalıştırmak yeterli olur
#
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

echo -e "${CYAN}${BOLD}══════════════════════════════════════${NC}"
echo -e "${CYAN}${BOLD}  Deploy Paketi Oluşturucu${NC}"
echo -e "${CYAN}${BOLD}══════════════════════════════════════${NC}"
echo ""

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# NVM yükle
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# Kontroller
if [ ! -d "nathan" ] || [ ! -d "nathan-api" ]; then
    echo -e "${RED}nathan/ ve nathan-api/ klasörleri bulunamadı!${NC}"
    exit 1
fi

# 1. Composer bağımlılıkları
echo -e "${CYAN}[1/4]${NC} Composer bağımlılıkları kontrol ediliyor..."
cd nathan-api
if [ ! -d "vendor" ]; then
    echo "  composer install çalıştırılıyor..."
    composer install --no-dev --optimize-autoloader --no-interaction 2>&1 | tail -3
fi
echo -e "${GREEN}  ✓ vendor/ hazır${NC}"
cd "$SCRIPT_DIR"

# 2. Next.js build
echo -e "${CYAN}[2/4]${NC} Next.js build kontrol ediliyor..."
cd nathan
if [ ! -d ".next/standalone" ] || [ ! -f ".next/standalone/server.js" ]; then
    echo "  npm install çalıştırılıyor..."
    npm install 2>&1 | tail -3
    echo "  Next.js build başlıyor..."
    if [ -f ".env.production" ]; then
        cp .env.production .env.local
    fi
    npx next build 2>&1 | tail -10
fi
echo -e "${GREEN}  ✓ standalone build hazır${NC}"
cd "$SCRIPT_DIR"

# 3. Paket oluştur
echo -e "${CYAN}[3/4]${NC} Paket oluşturuluyor..."

PACKAGE_NAME="onurtemel-deploy-$(date +%Y%m%d).tar.gz"

tar -czf "$PACKAGE_NAME" \
    --exclude='nathan/node_modules' \
    --exclude='nathan/.next/cache' \
    --exclude='nathan-api/storage/logs/*.log' \
    --exclude='nathan-api/.env' \
    --exclude='.git' \
    --exclude='.DS_Store' \
    --exclude='*.tar.gz' \
    --exclude='build-package.sh' \
    setup.sh \
    DEPLOYMENT.md \
    PLESK_KURULUM.md \
    nathan/ \
    nathan-api/

PACKAGE_SIZE=$(du -sh "$PACKAGE_NAME" | cut -f1)

echo -e "${GREEN}  ✓ Paket oluşturuldu: $PACKAGE_NAME ($PACKAGE_SIZE)${NC}"

# 4. Özet
echo ""
echo -e "${GREEN}${BOLD}══════════════════════════════════════${NC}"
echo -e "${GREEN}${BOLD}  ✅ Paket Hazır!${NC}"
echo -e "${GREEN}${BOLD}══════════════════════════════════════${NC}"
echo ""
echo -e "  📦 Dosya: ${BOLD}$PACKAGE_NAME${NC}"
echo -e "  📏 Boyut: ${BOLD}$PACKAGE_SIZE${NC}"
echo ""
echo -e "${YELLOW}${BOLD}  Sunucuya kurulum:${NC}"
echo -e "  ──────────────────────────────────"
echo -e "  ${CYAN}1.${NC} Dosyayı sunucuya yükleyin (SFTP/SCP)"
echo -e "  ${CYAN}2.${NC} SSH ile bağlanın"
echo -e "  ${CYAN}3.${NC} Şu komutları çalıştırın:"
echo ""
echo -e "     ${BOLD}tar -xzf $PACKAGE_NAME${NC}"
echo -e "     ${BOLD}bash setup.sh${NC}"
echo ""
echo -e "  Hepsi bu kadar! 🎉"
echo ""
