# onurtemel.com.tr — Yayınlama Rehberi

## Paket İçeriği

Bu paket tüm bağımlılıkları içermektedir. Sunucuda `composer install` veya `npm install` çalıştırmanıza **gerek yoktur**.

```
nathan/          → Next.js Frontend (onurtemel.com.tr)
  .next/standalone/  → Hazır build çıktısı (server.js + node_modules dahil)
  .next/static/      → Statik dosyalar
  public/            → Görseller, fontlar vs.

nathan-api/      → Laravel API + Admin Panel (api.onurtemel.com.tr)
  vendor/            → PHP bağımlılıkları (production, optimize edilmiş)
  database/database.sqlite → Hazır veritabanı (seed verileri dahil)
```

## Gereksinimler

### Sunucu
- **PHP** >= 8.2 (ext-gd, ext-sqlite3, ext-mbstring, ext-openssl, ext-pdo)
- **Node.js** >= 18

> Not: Composer ve npm sunucuda kurulu olması gerekmez. Tüm bağımlılıklar pakete dahildir.

---

## 1. Laravel API Kurulumu (api.onurtemel.com.tr)

### 1.1 Dosyaları Yükle
`nathan-api/` klasörünün tamamını sunucuya yükle.

### 1.2 Ortam Ayarları
```bash
cd nathan-api
cp .env.production .env
php artisan key:generate
```

### 1.3 .env Düzenle
Aşağıdaki alanları sunucu bilgilerine göre güncelle:
```env
APP_URL=https://api.onurtemel.com.tr

# E-posta ayarları (iletişim formu için)
MAIL_MAILER=smtp
MAIL_HOST=smtp.sunucu.com
MAIL_PORT=587
MAIL_USERNAME=mail@onurtemel.com.tr
MAIL_PASSWORD=sifre
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="noreply@onurtemel.com.tr"
```

### 1.4 Yapılandır
```bash
php artisan migrate --force
php artisan storage:link
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

> ⚠️ `composer install` çalıştırmayın — vendor/ klasörü pakete dahildir.
> İlk kurulumda seed verisi zaten veritabanında yüklüdür. Sıfırdan seed yapmak isterseniz:
> `php artisan migrate:fresh --seed`

### 1.5 Admin Hesabı
- **E-posta:** onur@temel.com
- **Şifre:** admin123
- **Admin Panel:** https://api.onurtemel.com.tr/admin

> ⚠️ İlk girişten sonra şifreyi mutlaka değiştir!

### 1.6 Web Sunucu (Nginx)
```nginx
server {
    listen 80;
    server_name api.onurtemel.com.tr;
    root /var/www/nathan-api/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    # CORS — frontend'e izin ver
    add_header Access-Control-Allow-Origin "https://onurtemel.com.tr" always;
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
    add_header Access-Control-Allow-Headers "Content-Type, Authorization" always;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_hide_header X-Powered-By;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

### 1.7 Apache (.htaccess — cPanel/Shared Hosting)
Laravel'in `public/` klasöründe zaten `.htaccess` dosyası var. cPanel kullanıyorsan:
- Document Root'u `nathan-api/public` olarak ayarla
- Veya ana dizinde şu `.htaccess`'i ekle:
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
```

### 1.8 Dosya İzinleri
```bash
chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

---

## 2. Next.js Frontend Kurulumu (onurtemel.com.tr)

### 2.1 Dosyaları Yükle
`nathan/` klasörünün tamamını sunucuya yükle.

### 2.2 Ortam Ayarları
```bash
cd nathan
cp .env.production .env.local
```

`.env.local` içeriği:
```env
NEXT_PUBLIC_API_URL=https://api.onurtemel.com.tr/api
```

### 2.3 Çalıştır

> ⚠️ `npm install` ve `npm run build` çalıştırmayın — build çıktısı pakete dahildir.

### Seçenek A: Node.js Sunucu (VPS — Önerilen)
```bash
# Standalone modda çalıştır -- public & static zaten standalone içinde
cd .next/standalone
cp -r ../../public ./public
cp -r ../../.next/static ./.next/static
node server.js
```

PM2 ile kalıcı çalıştırma:
```bash
npm install -g pm2
cd .next/standalone
pm2 start server.js --name "onurtemel-frontend"
pm2 save
pm2 startup
```

Nginx reverse proxy:
```nginx
server {
    listen 80;
    server_name onurtemel.com.tr www.onurtemel.com.tr;

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
}
```

### Seçenek B: Statik Export (cPanel/Shared Hosting)
> Bu seçenek için sunucuda Node.js ve npm gerekir.
> `next.config.mjs` dosyasını şu şekilde değiştir:
```js
const nextConfig = {
  output: "export",
  trailingSlash: true,
};
```
```bash
npm install
npm run build
```
`out/` klasörünü `public_html/` içine yükle.

> Not: Static export modunda ISR (60 sn yenileme) çalışmaz.
> Veriler build anındaki haliyle kalır.

### Seçenek C: Vercel (En Kolay)
```bash
npm install -g vercel
vercel
```
Environment variable olarak `NEXT_PUBLIC_API_URL=https://api.onurtemel.com.tr/api` ekle.

---

## 3. CORS Ayarı (Laravel)

`nathan-api/config/cors.php` dosyasını kontrol et:
```php
'allowed_origins' => ['https://onurtemel.com.tr', 'https://www.onurtemel.com.tr'],
```

---

## 4. SSL Sertifikası

Her iki domain için SSL sertifikası gerekli:
```bash
# Let's Encrypt (certbot)
sudo certbot --nginx -d onurtemel.com.tr -d www.onurtemel.com.tr
sudo certbot --nginx -d api.onurtemel.com.tr
```

---

## 5. DNS Ayarları

| Kayıt | Tip   | Değer                |
|-------|-------|----------------------|
| @     | A     | SUNUCU_IP            |
| www   | CNAME | onurtemel.com.tr     |
| api   | A     | SUNUCU_IP            |

---

## 6. Güvenlik Kontrol Listesi

- [ ] Admin şifresini değiştir (admin panelden)
- [ ] `APP_DEBUG=false` olduğundan emin ol
- [ ] SSL sertifikaları aktif
- [ ] CORS sadece kendi domain'ine izin veriyor
- [ ] `.env` dosyası web'den erişilemez
- [ ] `storage/` ve `database/` dizinleri web'den erişilemez
- [ ] MAIL ayarları doğru (iletişim formu için)

---

## Hızlı Komutlar

```bash
# Laravel cache temizle
php artisan config:clear && php artisan cache:clear && php artisan route:clear

# Laravel cache yeniden oluştur
php artisan config:cache && php artisan route:cache && php artisan view:cache

# Next.js yeniden build
npm run build

# PM2 restart
pm2 restart onurtemel-frontend
```
