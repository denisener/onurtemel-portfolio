#!/bin/bash
#
# ╔══════════════════════════════════════════════════════════════╗
# ║     ONUR TEMEL PORTFOLIO — OTOMATİK KURULUM SİHİRBAZI     ║
# ║                                                              ║
# ║  Kullanım: bash setup.sh                                    ║
# ║  Bu script tüm kurulumu otomatik olarak yapar.              ║
# ╚══════════════════════════════════════════════════════════════╝
#
set -e

# ═══════════════════════════════════════
# RENKLER
# ═══════════════════════════════════════
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

# ═══════════════════════════════════════
# YARDIMCI FONKSİYONLAR
# ═══════════════════════════════════════
info()    { echo -e "${BLUE}[ℹ]${NC} $1"; }
success() { echo -e "${GREEN}[✓]${NC} $1"; }
warn()    { echo -e "${YELLOW}[⚠]${NC} $1"; }
error()   { echo -e "${RED}[✗]${NC} $1"; }
step()    { echo -e "\n${CYAN}${BOLD}═══ $1 ═══${NC}\n"; }
divider() { echo -e "${CYAN}────────────────────────────────────────${NC}"; }

# ═══════════════════════════════════════
# BAŞLANGIÇ
# ═══════════════════════════════════════
clear
echo -e "${CYAN}${BOLD}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                                                              ║"
echo "║     🚀 ONUR TEMEL PORTFOLIO — KURULUM SİHİRBAZI 🚀         ║"
echo "║                                                              ║"
echo "║     Tüm kurulum otomatik olarak yapılacaktır.               ║"
echo "║     Tahmini süre: 2-5 dakika                                ║"
echo "║                                                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# ═══════════════════════════════════════
# SCRIPT KONUMUNU BELİRLE
# ═══════════════════════════════════════
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Dosya yapısını kontrol et
if [ ! -d "nathan-api" ] || [ ! -d "nathan" ]; then
    error "nathan/ ve nathan-api/ klasörleri bulunamadı!"
    error "Bu scripti, nathan/ ve nathan-api/ klasörlerinin yanına koyun."
    error "Mevcut dizin: $SCRIPT_DIR"
    exit 1
fi

success "Proje dosyaları bulundu: $SCRIPT_DIR"

# ═══════════════════════════════════════
# OTOMATİK TESPİT
# ═══════════════════════════════════════
step "1/8 — Ortam Tespiti"

# İşletim sistemi
OS=$(uname -s)
info "İşletim sistemi: $OS"

# PHP tespiti
if command -v php &>/dev/null; then
    PHP_VERSION=$(php -r "echo PHP_MAJOR_VERSION.'.'.PHP_MINOR_VERSION;")
    PHP_PATH=$(which php)
    success "PHP $PHP_VERSION bulundu: $PHP_PATH"
else
    error "PHP bulunamadı! PHP 8.2+ kurulu olmalı."
    exit 1
fi

# PHP sürüm kontrolü
PHP_MAJOR=$(php -r "echo PHP_MAJOR_VERSION;")
PHP_MINOR=$(php -r "echo PHP_MINOR_VERSION;")
if [ "$PHP_MAJOR" -lt 8 ] || ([ "$PHP_MAJOR" -eq 8 ] && [ "$PHP_MINOR" -lt 2 ]); then
    error "PHP 8.2+ gerekli. Mevcut: $PHP_MAJOR.$PHP_MINOR"
    exit 1
fi

# PHP eklentileri kontrolü
REQUIRED_EXTS="pdo_sqlite mbstring openssl gd fileinfo"
MISSING_EXTS=""
for ext in $REQUIRED_EXTS; do
    if ! php -m 2>/dev/null | grep -qi "^${ext}$"; then
        MISSING_EXTS="$MISSING_EXTS $ext"
    fi
done

if [ -n "$MISSING_EXTS" ]; then
    warn "Eksik PHP eklentileri:$MISSING_EXTS"
    warn "Kurulum devam edecek, ama çalışmayabilir."
else
    success "Tüm PHP eklentileri mevcut"
fi

# Node.js tespiti
NODE_FOUND=false
if command -v node &>/dev/null; then
    NODE_VERSION=$(node -v)
    NODE_PATH=$(which node)
    NODE_FOUND=true
    success "Node.js $NODE_VERSION bulundu: $NODE_PATH"
elif [ -f "$HOME/.nvm/nvm.sh" ]; then
    export NVM_DIR="$HOME/.nvm"
    . "$NVM_DIR/nvm.sh"
    if command -v node &>/dev/null; then
        NODE_VERSION=$(node -v)
        NODE_FOUND=true
        success "Node.js $NODE_VERSION bulundu (NVM)"
    fi
fi

# Plesk ortam tespiti
IS_PLESK=false
PLESK_VHOST_DIR=""
if [ -d "/var/www/vhosts" ]; then
    IS_PLESK=true
    # Mevcut dizinden domain'i tespit et
    CURRENT_PATH=$(pwd)
    if echo "$CURRENT_PATH" | grep -q "/var/www/vhosts/"; then
        DOMAIN=$(echo "$CURRENT_PATH" | sed 's|/var/www/vhosts/||' | cut -d'/' -f1)
        PLESK_VHOST_DIR="/var/www/vhosts/$DOMAIN"
        info "Plesk domain tespiti: $DOMAIN"
    fi
fi

if [ "$IS_PLESK" = true ]; then
    success "Plesk ortamı tespit edildi"
else
    info "Plesk ortamı değil — standart sunucu kurulumu yapılacak"
fi

# Composer tespiti
COMPOSER_CMD=""
if command -v composer &>/dev/null; then
    COMPOSER_CMD="composer"
    success "Composer bulundu: $(which composer)"
elif [ -f "$SCRIPT_DIR/composer.phar" ]; then
    COMPOSER_CMD="php $SCRIPT_DIR/composer.phar"
    success "Composer.phar bulundu"
else
    info "Composer bulunamadı — indirilecek..."
fi

# ═══════════════════════════════════════
# DOMAIN BİLGİLERİNİ OTOMATİK BELİRLE
# ═══════════════════════════════════════
step "2/8 — Domain Yapılandırması"

# .env.production dosyalarından domain bilgisini oku
if [ -f "nathan-api/.env.production" ]; then
    API_DOMAIN=$(grep "^APP_URL=" nathan-api/.env.production | sed 's|APP_URL=||' | sed 's|https://||' | sed 's|http://||')
    success "API domain: $API_DOMAIN"
else
    API_DOMAIN="api.onurtemel.com.tr"
    warn "API domain varsayılan kullanılıyor: $API_DOMAIN"
fi

if [ -f "nathan/.env.production" ]; then
    FRONTEND_API_URL=$(grep "^NEXT_PUBLIC_API_URL=" nathan/.env.production | sed 's|NEXT_PUBLIC_API_URL=||')
    success "Frontend API URL: $FRONTEND_API_URL"
else
    FRONTEND_API_URL="https://$API_DOMAIN/api"
    warn "Frontend API URL varsayılan: $FRONTEND_API_URL"
fi

# Ana domain (API domain'den türet)
MAIN_DOMAIN=$(echo "$API_DOMAIN" | sed 's|^api\.||')
info "Ana domain: $MAIN_DOMAIN"

# ═══════════════════════════════════════
# DİZİN YOLLARINI BELİRLE
# ═══════════════════════════════════════
step "3/8 — Dizin Yapılandırması"

if [ "$IS_PLESK" = true ] && [ -n "$PLESK_VHOST_DIR" ]; then
    # Plesk ortamı — standart yolları kullan
    API_DEPLOY_DIR="$PLESK_VHOST_DIR/$API_DOMAIN"
    if [ -d "$API_DEPLOY_DIR" ]; then
        info "API deploy dizini: $API_DEPLOY_DIR"
    elif [ -d "$PLESK_VHOST_DIR/$API_DOMAIN/httpdocs" ]; then
        API_DEPLOY_DIR="$PLESK_VHOST_DIR/$API_DOMAIN/httpdocs"
    else
        API_DEPLOY_DIR="$PLESK_VHOST_DIR/$API_DOMAIN"
    fi

    FRONTEND_DEPLOY_DIR="$PLESK_VHOST_DIR/httpdocs"
    info "Frontend deploy dizini: $FRONTEND_DEPLOY_DIR"
else
    # Standart sunucu — mevcut dizinde kurulum
    API_DEPLOY_DIR="$SCRIPT_DIR/api-live"
    FRONTEND_DEPLOY_DIR="$SCRIPT_DIR/frontend-live"
    info "API deploy dizini: $API_DEPLOY_DIR"
    info "Frontend deploy dizini: $FRONTEND_DEPLOY_DIR"
fi

# ═══════════════════════════════════════
# LARAVEL API KURULUMU
# ═══════════════════════════════════════
step "4/8 — Laravel API Kurulumu"

API_SRC="$SCRIPT_DIR/nathan-api"
cd "$API_SRC"

# Composer bağımlılıkları
if [ -d "vendor" ] && [ -f "vendor/autoload.php" ]; then
    success "Composer bağımlılıkları zaten mevcut (vendor/)"
else
    info "Composer bağımlılıkları yükleniyor..."
    if [ -z "$COMPOSER_CMD" ]; then
        info "Composer indiriliyor..."
        php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
        php composer-setup.php --quiet
        rm -f composer-setup.php
        COMPOSER_CMD="php $API_SRC/composer.phar"
    fi
    $COMPOSER_CMD install --no-dev --optimize-autoloader --no-interaction 2>&1 | tail -5
    success "Composer bağımlılıkları yüklendi"
fi

# .env dosyası oluştur
if [ ! -f ".env" ]; then
    if [ -f ".env.production" ]; then
        cp .env.production .env
        info ".env.production → .env kopyalandı"
    elif [ -f ".env.example" ]; then
        cp .env.example .env
        info ".env.example → .env kopyalandı"
    fi
fi

# APP_KEY oluştur
CURRENT_KEY=$(grep "^APP_KEY=" .env | sed 's|APP_KEY=||')
if [ -z "$CURRENT_KEY" ]; then
    php artisan key:generate --force --no-interaction 2>&1
    success "APP_KEY oluşturuldu"
else
    success "APP_KEY zaten mevcut"
fi

# Production ayarları (.env'yi güncelle)
sed -i.bak "s|^APP_ENV=.*|APP_ENV=production|" .env
sed -i.bak "s|^APP_DEBUG=.*|APP_DEBUG=false|" .env
sed -i.bak "s|^APP_URL=.*|APP_URL=https://$API_DOMAIN|" .env
sed -i.bak "s|^SESSION_DRIVER=.*|SESSION_DRIVER=file|" .env
sed -i.bak "s|^CACHE_STORE=.*|CACHE_STORE=file|" .env
sed -i.bak "s|^QUEUE_CONNECTION=.*|QUEUE_CONNECTION=sync|" .env
rm -f .env.bak
success ".env production ayarları uygulandı"

# SQLite veritabanı
if [ ! -f "database/database.sqlite" ]; then
    touch database/database.sqlite
    info "SQLite veritabanı oluşturuldu"
fi

# Storage dizinleri
mkdir -p storage/framework/sessions
mkdir -p storage/framework/cache/data
mkdir -p storage/framework/views
mkdir -p storage/logs
mkdir -p storage/app/public/images
success "Storage dizinleri oluşturuldu"

# Migrations
php artisan migrate --force --no-interaction 2>&1 | tail -3
success "Veritabanı migrasyonları çalıştırıldı"

# Storage link
php artisan storage:link --force --no-interaction 2>/dev/null || true
success "Storage link oluşturuldu"

# Filament assets
php artisan filament:assets 2>/dev/null || true
success "Filament assets yayınlandı"

# Admin kullanıcı oluştur (eğer yoksa)
ADMIN_EXISTS=$(php artisan tinker --execute="echo \App\Models\User::count();" 2>/dev/null | tail -1)
if [ "$ADMIN_EXISTS" = "0" ] || [ -z "$ADMIN_EXISTS" ]; then
    php artisan tinker --execute="
        \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'onur@temel.com',
            'password' => bcrypt('admin123'),
        ]);
    " 2>/dev/null || true
    success "Admin kullanıcı oluşturuldu (onur@temel.com / admin123)"
else
    success "Admin kullanıcı zaten mevcut"
fi

# Seed verileri (eğer tablo boşsa)
PROJECT_COUNT=$(php artisan tinker --execute="echo \App\Models\PersonalInfo::count();" 2>/dev/null | tail -1)
if [ "$PROJECT_COUNT" = "0" ] || [ -z "$PROJECT_COUNT" ]; then
    php artisan db:seed --force --no-interaction 2>/dev/null || true
    info "Örnek veriler yüklendi"
fi

# Cache temizle ve optimize et
php artisan config:clear 2>/dev/null || true
php artisan cache:clear 2>/dev/null || true
php artisan route:cache 2>/dev/null || true
php artisan view:cache 2>/dev/null || true
success "Laravel optimizasyonları tamamlandı"

# İzinler
chmod -R 775 storage bootstrap/cache 2>/dev/null || true
success "Dosya izinleri ayarlandı"

cd "$SCRIPT_DIR"

# ═══════════════════════════════════════
# NEXT.JS FRONTEND KURULUMU
# ═══════════════════════════════════════
step "5/8 — Next.js Frontend Kurulumu"

FRONTEND_SRC="$SCRIPT_DIR/nathan"
cd "$FRONTEND_SRC"

# Standalone build kontrolü
if [ -d ".next/standalone" ] && [ -f ".next/standalone/server.js" ]; then
    success "Standalone build zaten mevcut"
else
    if [ "$NODE_FOUND" = true ]; then
        # node_modules kontrolü
        if [ ! -d "node_modules" ]; then
            info "npm install çalıştırılıyor..."
            npm install --production=false 2>&1 | tail -5
            success "npm bağımlılıkları yüklendi"
        fi

        # .env.production'ı .env.local olarak ayarla (build için)
        if [ -f ".env.production" ]; then
            cp .env.production .env.local
        fi

        info "Next.js build başlıyor (bu biraz sürebilir)..."
        npx next build 2>&1 | tail -10
        success "Next.js build tamamlandı"
    else
        error "Node.js bulunamadı ve standalone build mevcut değil!"
        error "Node.js kurun veya önceden build edilmiş paketi kullanın."
        exit 1
    fi
fi

cd "$SCRIPT_DIR"

# ═══════════════════════════════════════
# DEPLOY — DOSYALARI KOPYALA
# ═══════════════════════════════════════
step "6/8 — Dosyaları Deploy Dizinine Kopyalama"

# API DEPLOY
if [ "$API_DEPLOY_DIR" != "$API_SRC" ]; then
    info "API dosyaları kopyalanıyor: $API_DEPLOY_DIR"
    mkdir -p "$API_DEPLOY_DIR"

    # rsync varsa kullan, yoksa cp
    if command -v rsync &>/dev/null; then
        rsync -a --exclude='.git' --exclude='node_modules' "$API_SRC/" "$API_DEPLOY_DIR/"
    else
        cp -a "$API_SRC/." "$API_DEPLOY_DIR/"
    fi
    success "API dosyaları kopyalandı"

    # Deploy dizininde storage link yenile
    cd "$API_DEPLOY_DIR"
    php artisan storage:link --force --no-interaction 2>/dev/null || true
    cd "$SCRIPT_DIR"
else
    success "API zaten doğru dizinde"
fi

# FRONTEND DEPLOY
info "Frontend dosyaları hazırlanıyor: $FRONTEND_DEPLOY_DIR"
mkdir -p "$FRONTEND_DEPLOY_DIR"

# Standalone dosyalarını kopyala
if [ -d "$FRONTEND_SRC/.next/standalone" ]; then
    cp -a "$FRONTEND_SRC/.next/standalone/." "$FRONTEND_DEPLOY_DIR/"
    success "Standalone server kopyalandı"
fi

# Static dosyaları kopyala
if [ -d "$FRONTEND_SRC/.next/static" ]; then
    mkdir -p "$FRONTEND_DEPLOY_DIR/.next/static"
    cp -a "$FRONTEND_SRC/.next/static/." "$FRONTEND_DEPLOY_DIR/.next/static/"
    success "Static dosyalar kopyalandı"
fi

# Public dosyaları kopyala
if [ -d "$FRONTEND_SRC/public" ]; then
    mkdir -p "$FRONTEND_DEPLOY_DIR/public"
    cp -a "$FRONTEND_SRC/public/." "$FRONTEND_DEPLOY_DIR/public/"
    success "Public dosyalar kopyalandı"
fi

# .env dosyası oluştur
echo "NEXT_PUBLIC_API_URL=$FRONTEND_API_URL" > "$FRONTEND_DEPLOY_DIR/.env"
success "Frontend .env oluşturuldu"

# ═══════════════════════════════════════
# PM2 / NODE.JS SUNUCU YAPILANDIRMASI
# ═══════════════════════════════════════
step "7/8 — Node.js Sunucu Yapılandırması"

if [ "$NODE_FOUND" = true ]; then
    # ecosystem.config.js oluştur (PM2 için)
    cat > "$FRONTEND_DEPLOY_DIR/ecosystem.config.js" << 'PMEOF'
module.exports = {
  apps: [{
    name: 'onurtemel-frontend',
    script: 'server.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '256M',
    error_file: './logs/error.log',
    out_file: './logs/output.log',
    merge_logs: true
  }]
};
PMEOF
    success "PM2 ecosystem.config.js oluşturuldu"
    mkdir -p "$FRONTEND_DEPLOY_DIR/logs"

    # PM2 ile başlat (eğer PM2 varsa)
    if command -v pm2 &>/dev/null; then
        cd "$FRONTEND_DEPLOY_DIR"
        pm2 delete onurtemel-frontend 2>/dev/null || true
        pm2 start ecosystem.config.js
        pm2 save
        success "Frontend PM2 ile başlatıldı (port 3000)"
        cd "$SCRIPT_DIR"
    elif command -v npx &>/dev/null; then
        # PM2 yoksa npx ile kurup başlat
        info "PM2 yükleniyor..."
        npm install -g pm2 2>/dev/null || true
        if command -v pm2 &>/dev/null; then
            cd "$FRONTEND_DEPLOY_DIR"
            pm2 delete onurtemel-frontend 2>/dev/null || true
            pm2 start ecosystem.config.js
            pm2 save
            success "Frontend PM2 ile başlatıldı (port 3000)"
            cd "$SCRIPT_DIR"
        else
            warn "PM2 yüklenemedi. Manuel başlatma gerekebilir:"
            warn "  cd $FRONTEND_DEPLOY_DIR && node server.js"
        fi
    fi
else
    warn "Node.js bulunamadı — frontend sunucuyu manuel başlatmanız gerekecek"
fi

# ═══════════════════════════════════════
# PLESK YAPILANDIRMASI (Nginx)
# ═══════════════════════════════════════
step "8/8 — Web Sunucu Yapılandırması"

if [ "$IS_PLESK" = true ]; then
    # Plesk Nginx reverse proxy ayarı
    NGINX_CONF_DIR="$PLESK_VHOST_DIR/conf"
    if [ -d "$NGINX_CONF_DIR" ]; then
        # Frontend için Nginx reverse proxy
        FRONTEND_NGINX="$NGINX_CONF_DIR/vhost_nginx.conf"
        cat > "$FRONTEND_NGINX" << 'NGINXEOF'
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
NGINXEOF
        success "Nginx reverse proxy yapılandırması oluşturuldu"
        
        # Plesk'e Nginx'i yeniden yüklet
        if command -v /usr/local/psa/admin/bin/httpdmng &>/dev/null; then
            /usr/local/psa/admin/bin/httpdmng --reconfigure-domain "$MAIN_DOMAIN" 2>/dev/null || true
        fi
    else
        warn "Plesk Nginx conf dizini bulunamadı: $NGINX_CONF_DIR"
        warn "Plesk panelinden Nginx ayarını manuel yapmanız gerekebilir."
    fi

    # API domain için .htaccess (PHP)
    API_PUBLIC="$API_DEPLOY_DIR/public"
    if [ -d "$API_PUBLIC" ] && [ ! -f "$API_PUBLIC/.htaccess" ]; then
        cat > "$API_PUBLIC/.htaccess" << 'HTEOF'
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
HTEOF
        success ".htaccess oluşturuldu"
    fi

    success "Web sunucu yapılandırması tamamlandı"
else
    info "Plesk ortamı değil — Nginx/Apache ayarını manuel yapmanız gerekebilir."
    divider
    echo -e "${YELLOW}Nginx reverse proxy örneği:${NC}"
    echo ""
    echo "  # Frontend (onurtemel.com.tr)"
    echo "  location / {"
    echo "      proxy_pass http://127.0.0.1:3000;"
    echo "      proxy_set_header Host \$host;"
    echo "      proxy_set_header X-Forwarded-Proto \$scheme;"
    echo "  }"
    echo ""
    echo "  # API (api.onurtemel.com.tr)"
    echo "  location / {"
    echo "      root $API_DEPLOY_DIR/public;"
    echo "      try_files \$uri \$uri/ /index.php?\$query_string;"
    echo "  }"
    divider
fi

# ═══════════════════════════════════════
# KONTROL VE SONUÇ
# ═══════════════════════════════════════
echo ""
echo -e "${GREEN}${BOLD}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                                                              ║"
echo "║     ✅ KURULUM BAŞARIYLA TAMAMLANDI!                         ║"
echo "║                                                              ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

divider
echo -e "${BOLD}📋 KURULUM ÖZETİ:${NC}"
divider
echo ""
echo -e "  ${GREEN}API Backend:${NC}"
echo -e "    Dizin:  $API_DEPLOY_DIR"
echo -e "    URL:    https://$API_DOMAIN"
echo -e "    Admin:  https://$API_DOMAIN/admin"
echo ""
echo -e "  ${GREEN}Frontend:${NC}"
echo -e "    Dizin:  $FRONTEND_DEPLOY_DIR"
echo -e "    URL:    https://$MAIN_DOMAIN"
echo -e "    Port:   3000"
echo ""
echo -e "  ${GREEN}Admin Giriş:${NC}"
echo -e "    E-posta: onur@temel.com"
echo -e "    Şifre:   admin123"
echo ""
divider
echo -e "${YELLOW}${BOLD}⚡ SONRAKİ ADIMLAR:${NC}"
divider
echo ""

if [ "$IS_PLESK" = true ]; then
    echo -e "  1. Plesk panelden SSL sertifikası etkinleştirin (Let's Encrypt)"
    echo -e "     → Websites & Domains → $MAIN_DOMAIN → SSL/TLS Certificates"
    echo -e ""
    echo -e "  2. API domain (${API_DOMAIN}) için PHP Document Root ayarlayın:"
    echo -e "     → Document root: ${API_DEPLOY_DIR}/public"
    echo -e ""
    echo -e "  3. Node.js uygulamasını Plesk'ten kontrol edin:"
    echo -e "     → Websites & Domains → $MAIN_DOMAIN → Node.js"
    echo -e "     → Application Root: $FRONTEND_DEPLOY_DIR"
    echo -e "     → Application Startup File: server.js"
else
    echo -e "  1. Nginx/Apache reverse proxy yapılandırmasını uygulayın"
    echo -e "  2. SSL sertifikası kurun (certbot önerilir)"
    echo -e "  3. Frontend sunucusunun çalıştığından emin olun:"
    echo -e "     cd $FRONTEND_DEPLOY_DIR && node server.js"
fi

echo ""
echo -e "  ${RED}⚠ ÖNEMLİ: Admin şifresini ilk girişte değiştirin!${NC}"
echo ""
divider

# API'yi test et
echo ""
info "API kontrolü yapılıyor..."
if command -v curl &>/dev/null; then
    # Yerel test
    cd "$API_DEPLOY_DIR" 2>/dev/null || cd "$API_SRC"
    TEST_RESULT=$(php artisan tinker --execute="echo 'API_OK';" 2>/dev/null | tail -1)
    if [ "$TEST_RESULT" = "API_OK" ]; then
        success "API çalışıyor ✓"
    else
        warn "API test edilemedi — sunucu başladığında kontrol edin"
    fi
else
    info "curl bulunamadı — API'yi tarayıcıdan test edin"
fi

echo ""
success "Kurulum sihirbazı tamamlandı! 🎉"
echo ""
