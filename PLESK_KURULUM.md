# onurtemel.com.tr — Plesk Panel Kurulum Rehberi

> Bu döküman, Plesk panelli paylaşımlı bir Linux hostingde projeyi sıfırdan kurmak isteyen biri için hazırlanmıştır.
> Her adım detaylı açıklanmıştır. Hiçbir adımı atlamayın, sırayla ilerleyin.

---

## 📋 Genel Bakış

Bu proje iki parçadan oluşur:

| Parça | Klasör | Domain | Ne İşe Yarar |
|-------|--------|--------|--------------|
| **API + Admin Panel** | `nathan-api/` | `api.onurtemel.com.tr` | Tüm içerikleri yönettiğin admin panel + veritabanı |
| **Frontend (Web Sitesi)** | `nathan/` | `onurtemel.com.tr` | Ziyaretçilerin gördüğü site |

**Akış:** Ziyaretçi `onurtemel.com.tr`'ye girdiğinde → Frontend, `api.onurtemel.com.tr`'den verileri çeker → Sayfayı gösterir.

---

## 📦 Paket İçeriği

Bu paket **tüm bağımlılıkları** içerir. Sunucuda `composer install` veya `npm install` çalıştırmana **gerek yok**.

```
nathan-api/
  ├── vendor/              → PHP kütüphaneleri (hazır)
  ├── database/database.sqlite → Veritabanı (örnek veriler dahil)
  ├── .env.production      → Sunucu ayar şablonu
  └── public/              → Web kök dizini

nathan/
  ├── .next/standalone/    → Derlenmiş site (server.js + node_modules dahil)
  ├── .next/static/        → CSS, JS dosyaları
  ├── public/              → Görseller, fontlar
  └── .env.production      → Sunucu ayar şablonu
```

---

## ✅ Gereksinimler

Plesk panelinde şunların aktif olması gerekir:

- **PHP 8.2 veya üstü** (ext-gd, ext-sqlite3, ext-mbstring, ext-pdo aktif)
- **Node.js** desteği (Plesk'te "Node.js" eklentisi kurulu olmalı)
- **SSH erişimi** (Terminal/komut satırı)

### Plesk'te Node.js Eklentisini Kontrol Etme
1. Plesk paneline giriş yap
2. Sol menüde **"Extensions"** (Eklentiler) sekmesine tıkla
3. Arama kutusuna **"Node.js"** yaz
4. Eğer kurulu değilse **"Get it Free"** / **"Install"** butonuna tıkla
5. Kurulum tamamlanınca sayfayı yenile

### PHP Sürümünü Kontrol Etme
1. Plesk panelinde domain'ine tıkla (`api.onurtemel.com.tr`)
2. **"PHP Settings"** veya **"PHP Ayarları"** kısmına git
3. PHP sürümünü **8.2** veya **8.3** olarak seç
4. Aşağıdaki eklentilerin açık (✓) olduğundan emin ol:
   - `gd`
   - `sqlite3`
   - `pdo_sqlite`
   - `mbstring`
   - `openssl`
   - `fileinfo`
5. **"Apply"** / **"Uygula"** butonuna tıkla

---

## ⚠️ ÖNCELİKLİ ADIM: Sunucudaki Dosya Yollarını Bulma

Plesk'te dosya yolları hostinge göre farklılık gösterir. **Komutları çalıştırmadan önce** kendi sunucundaki gerçek yolu bulman gerekiyor.

### Olası yollar (hosting firmasına göre değişir):
```
/var/www/vhosts/onurtemel.com.tr/httpdocs/
/var/www/vhosts/onurtemel.com.tr/api.onurtemel.com.tr/httpdocs/
/home/onurtemel/httpdocs/
/home/httpd/vhosts/onurtemel.com.tr/httpdocs/
```

### Doğru yolu bulmanın 3 yolu:

**Yol 1 — Plesk Panelden (En Kolay):**
1. Plesk panelinde domain'ine tıkla (ör. `api.onurtemel.com.tr`)
2. **"Hosting & DNS"** → **"Hosting Settings"** kısmına git
3. **"Document root"** yazan değeri oku — bu senin dosya yolun
4. Bu yolu bir yere not et

**Yol 2 — Plesk Dosya Yöneticisinden:**
1. Plesk panelinde domain'ine tıkla
2. **"Files"** (Dosyalar) sekmesine tıkla
3. Üst kısımda gösterilen yol, senin dosya yolun

**Yol 3 — SSH ile:**
```bash
# Sunucuya bağlandıktan sonra:
pwd
# Bu komut mevcut dizini gösterir

# veya artisan dosyasını aratarak bul:
find / -name "artisan" -path "*/httpdocs/*" 2>/dev/null
# Bulunan yoldan "artisan" kısmını çıkar, o senin API dizinin
```

> **Rehberin geri kalanında iki kısaltma kullanılacak:**
> - `API_DIZINI` = api.onurtemel.com.tr'nin dosya yolu
> - `FRONTEND_DIZINI` = onurtemel.com.tr'nin dosya yolu
>
> Komutlarda bu kısaltmaları gördüğünde, **kendi bulduğun gerçek yolu yaz.**

---

## BÖLÜM 1: API + ADMIN PANEL KURULUMU

> Bu bölümde `api.onurtemel.com.tr` alt alan adını oluşturup Laravel API'yi kuruyoruz.

---

### 1.1 Alt Alan Adı (Subdomain) Oluşturma

**Neden:** Admin panel ve API, ana siteden ayrı bir adreste çalışacak (`api.onurtemel.com.tr`).

1. Plesk paneline giriş yap
2. Sol menüden **"Websites & Domains"** (Web Siteleri ve Alan Adları) sekmesine tıkla
3. **"Add Subdomain"** (Alt Alan Adı Ekle) butonuna tıkla
4. Şu bilgileri gir:
   - **Subdomain name:** `api`
   - **Document root:** `api.onurtemel.com.tr` (otomatik doldurulacak, olduğu gibi bırak)
5. **"OK"** butonuna tıkla
6. Subdomain oluştuktan sonra, **"Hosting Settings"** kısmından **Document Root yolunu not et** — bu senin `API_DIZINI`

---

### 1.2 Dosyaları Sunucuya Yükleme

**Neden:** Bilgisayarındaki proje dosyalarını sunucuya aktarman gerekiyor.

#### Yöntem A: FTP ile Yükleme (Önerilen — En Anlaşılır)

1. Bir FTP programı indir: [FileZilla](https://filezilla-project.org/) (ücretsiz)
2. FileZilla'yı aç ve şu bilgileri gir:
   - **Host:** `ftp.onurtemel.com.tr` veya sunucu IP adresi
   - **Username:** Plesk FTP kullanıcı adın
   - **Password:** Plesk FTP şifren
   - **Port:** `21`
3. **"Quick Connect"** (Hızlı Bağlan) butonuna tıkla
4. Sağ panelde (sunucu tarafı) `api.onurtemel.com.tr/` altındaki `httpdocs/` klasörüne git
5. Sol panelde (bilgisayar tarafı) arşivi aç → `nathan-api/` klasörünün **içindekileri** seç
6. Sağ tarafa sürükle-bırak yap

> **ÖNEMLİ:** `nathan-api/` klasörünün kendisini değil, **içindeki tüm dosya ve klasörleri** yükle.
> Yani sunucuda şu yapı olmalı:
> ```
> httpdocs/
>   ├── app/
>   ├── bootstrap/
>   ├── config/
>   ├── database/
>   ├── public/
>   ├── vendor/
>   ├── .env.production
>   ├── artisan
>   └── ...
> ```

> **FTP Bilgilerini Nereden Bulabilirim?**
> Plesk panelinde: **"Websites & Domains"** → **"FTP Access"** veya **"Web Hosting Access"** sekmesinde
> kullanıcı adı ve şifre bilgileri yer alır. Şifreyi bilmiyorsan buradan yeni bir tane belirleyebilirsin.

#### Yöntem B: Plesk Dosya Yöneticisi (Az dosya için)
1. Plesk panelinde `api.onurtemel.com.tr` domainine tıkla
2. **"Files"** (Dosyalar) sekmesine tıkla
3. `httpdocs/` klasörüne gir
4. **"Upload"** butonuyla dosyaları tek tek veya zip olarak yükle
5. Zip yüklediysen, zip dosyasına tıkla → **"Extract Files"** (Dosyaları Çıkar) seç

> ⚠️ Dosya Yöneticisi büyük dosyalar için yavaş olabilir. FTP önerilir.

#### Yöntem C: SSH ile Yükleme (En Hızlı — Teknik bilgi gerektirir)

1. **Kendi bilgisayarında** Terminal (Mac) veya PowerShell (Windows) aç:
```bash
scp onurtemel-deploy.tar.gz kullanici@SUNUCU_IP:/tmp/
```
> - `kullanici` → SSH kullanıcı adın (Plesk'teki kullanıcı adı)
> - `SUNUCU_IP` → Sunucunun IP adresi (Plesk panelinde "Server Information" kısmında bulunur)
> - Şifre sorulacak → Plesk'teki SSH şifreni gir
>
> **Windows kullanıyorsan:** PowerShell'e bu komutu yaz. Veya [WinSCP](https://winscp.net/) programını kullanabilirsin.

2. SSH ile sunucuya bağlan:
```bash
ssh kullanici@SUNUCU_IP
```
> Şifre sorulacak — aynı şifreyi gir.
> Bağlandığında `kullanici@sunucu:~$` gibi bir ifade göreceksin — bu "bağlandın" demek.

3. Dosyaları aç:
```bash
cd /tmp
tar -xzf onurtemel-deploy.tar.gz
```
> - `cd /tmp` → geçici dizine git
> - `tar -xzf` → sıkıştırılmış arşivi aç
> - Açtıktan sonra `/tmp/nathan-api/` ve `/tmp/nathan/` klasörleri oluşur
> - `ls /tmp/nathan-api/` yazarak dosyaların açıldığını doğrulayabilirsin

4. **Kendi Document Root yolunu bul** (Plesk panelden not ettiğin yol):
```bash
# ÖRNEK yollar — hangisi senin sunucunda geçerliyse onu kullan:

# Olasılık 1:
ls /var/www/vhosts/onurtemel.com.tr/api.onurtemel.com.tr/httpdocs/
# Olasılık 2:
ls /var/www/vhosts/onurtemel.com.tr/subdomains/api/httpdocs/
# Olasılık 3:
ls /home/onurtemel/api.onurtemel.com.tr/httpdocs/

# Hangisi hata vermeden dosya listesi gösteriyorsa, o doğru yoldur.
# Hiçbiri çalışmazsa:
find / -type d -name "httpdocs" 2>/dev/null | grep api
```

5. API dosyalarını doğru yere kopyala:
```bash
# Aşağıdaki yolu KENDİ YOLUNLA DEĞİŞTİR:
cp -r /tmp/nathan-api/* /BURAYA/KENDI/YOLUNU/YAZ/httpdocs/

# Örnek (eğer yolun /var/www/vhosts/.../api.onurtemel.com.tr/httpdocs/ ise):
# cp -r /tmp/nathan-api/* /var/www/vhosts/onurtemel.com.tr/api.onurtemel.com.tr/httpdocs/
```

---

### 1.3 Document Root'u Ayarlama

**Neden:** Laravel'de web istekleri `public/` klasöründen karşılanır. Plesk'e bunu söylememiz gerekiyor.

1. Plesk panelinde `api.onurtemel.com.tr`'ye tıkla
2. **"Hosting & DNS"** → **"Hosting Settings"** (Barındırma Ayarları) sekmesine tıkla
3. **"Document root"** alanını bul
4. Değeri şu şekilde değiştir:
   ```
   /httpdocs/public
   ```
   > Dikkat: Sadece `/public` eklemiyorsun, tam yol: `/httpdocs/public`
5. **"OK"** veya **"Apply"** butonuna tıkla

> **Bu çok önemli!** Eğer Document Root `/httpdocs/public` olmazsa, `.env` dosyası ve kaynak kodlar web'den erişilebilir olur. Bu bir **GÜVENLİK AÇIĞI**'dır.

---

### 1.4 Ortam Dosyasını Hazırlama (.env)

**Neden:** `.env` dosyası, uygulamanın veritabanı, e-posta ve URL gibi ayarlarını içerir. Her ortam (geliştirme, yayın) için farklıdır.

---

#### ADIM 1: .env dosyasını oluşturma

**3 farklı yöntem var. Hangisi kolayına geliyorsa onu kullan:**

##### Yöntem A — Plesk Dosya Yöneticisi (SSH bilmeyenler için):
1. Plesk panelinde `api.onurtemel.com.tr` → **"Files"** (Dosyalar) sekmesine tıkla
2. `httpdocs/` klasörüne gir
3. `.env.production` dosyasını bul (nokta ile başlayan dosyalar gizli olabilir — "Show Hidden Files" seçeneğini aktif et)
4. `.env.production` dosyasına tıkla → **"Copy"** (Kopyala) seç
5. Yeni dosya adı olarak `.env` yaz → **"OK"**
6. Şimdi `.env` dosyanız hazır

##### Yöntem B — SSH ile:
```bash
# Önce API dizinine git (kendi yolunla değiştir):
cd /KENDI/YOLUN/httpdocs

# .env dosyasını oluştur:
cp .env.production .env
```
> `cd` komutu "change directory" (dizin değiştir) demek — seni o klasöre götürür.
> `cp` komutu "copy" (kopyala) demek — `.env.production` dosyasının kopyasını `.env` adıyla oluşturur.
>
> **"No such file or directory" hatası alıyorsan:**
> Yol yanlış demektir. Doğru yolu bulmak için:
> ```bash
> find / -name ".env.production" 2>/dev/null
> ```
> Bu komut tüm sunucuda `.env.production` dosyasını arar. Bulduğu yolun son kısmındaki dosya adını çıkar — geri kalanı senin dizinin.

##### Yöntem C — Manuel oluşturma (hiçbiri çalışmazsa):
1. Plesk → Files → `httpdocs/` içinde **"New File"** (Yeni Dosya) butonuna tıkla
2. Dosya adı: `.env`
3. İçeriğini `.env.production` dosyasından kopyala-yapıştır

---

#### ADIM 2: Uygulama Anahtarı (APP_KEY) Oluşturma

**Neden:** Laravel güvenlik için benzersiz bir şifreleme anahtarı gerektirir. Bu anahtar olmadan uygulama çalışmaz.

**5 farklı yöntem var — sırayla dene, hangisi çalışırsa onu kullan:**

##### Yöntem A — SSH ile artisan komutu (en kolay):
```bash
cd /KENDI/YOLUN/httpdocs
php artisan key:generate
```
> Başarılıysa şunu göreceksin: `Application key set successfully.`
> Bu komut otomatik olarak `.env` dosyasına anahtarı yazar.

##### Yöntem B — PHP tam yolu ile (php komutu bulunamazsa):
Bazı Plesk sunucularında `php` komutu doğrudan çalışmaz. Tam yol belirtmen gerekir:
```bash
# Önce PHP'nin yerini bul:
find /opt/plesk/php -name "php" -type f 2>/dev/null
# veya:
which php8.2 2>/dev/null || which php8.3 2>/dev/null || which php 2>/dev/null
```
> Çıktıda bir yol göreceksin, örneğin:
> - `/opt/plesk/php/8.3/bin/php`
> - `/opt/plesk/php/8.2/bin/php`
> - `/usr/bin/php`

Bulunan yolla komutu çalıştır:
```bash
cd /KENDI/YOLUN/httpdocs
/opt/plesk/php/8.3/bin/php artisan key:generate
```
> ⚠️ Üstteki `/opt/plesk/php/8.3/bin/php` kısmını kendi bulduğun yol ile değiştir!

##### Yöntem C — Plesk "Scheduled Tasks" ile:
1. Plesk panelinde **"Tools & Settings"** → **"Scheduled Tasks"** (Zamanlanmış Görevler) sekmesine tıkla
   > Veya domain'ine tıkla → "Scheduled Tasks" / "Cron Jobs"
2. **"Add Task"** (Görev Ekle) butonuna tıkla
3. **"Task Type":** `Run a command` seç
4. **"Command"** alanına şunu yaz:
   ```
   cd /KENDI/YOLUN/httpdocs && php artisan key:generate
   ```
5. **"Run"** butonuyla hemen çalıştır
6. Çalıştıktan sonra görevi silebilirsin

##### Yöntem D — Online anahtar oluşturucu:
1. Tarayıcıda şu adrese git: **https://generate-random.org/laravel-key-generator**
2. **"Generate"** butonuna tıkla
3. Oluşturulan anahtarı kopyala (şuna benzer: `base64:aBcDeFgHiJkLmNoPqRsTuVwXyZ123456789ABCD=`)
4. Plesk → Files → `httpdocs/` → `.env` dosyasını düzenle (kalem ikonu)
5. `APP_KEY=` satırını bul (boş olacak)
6. Kopyaladığın anahtarı yapıştır:
   ```
   APP_KEY=base64:aBcDeFgHiJkLmNoPqRsTuVwXyZ123456789ABCD=
   ```
7. **"Save"** (Kaydet) butonuna tıkla

##### Yöntem E — openssl ile elle oluşturma:
```bash
# SSH'da bu komutu çalıştır:
echo "base64:$(openssl rand -base64 32)"
```
> Ekranda `base64:xYz123...` gibi bir anahtar görünecek.
> Bu anahtarı kopyala ve `.env` dosyasındaki `APP_KEY=` satırına yapıştır.
>
> **openssl da yoksa** şu komutu dene:
> ```bash
> python3 -c "import base64,os; print('base64:' + base64.b64encode(os.urandom(32)).decode())"
> ```

---

#### ADIM 3: .env dosyasını düzenleme

**Yöntem A — Plesk Dosya Yöneticisi ile (SSH bilmeyenler için):**
1. Plesk → `api.onurtemel.com.tr` → **"Files"** sekmesine tıkla
2. `httpdocs/` klasörüne gir
3. `.env` dosyasının yanındaki **kalem ikonuna** (Edit/Düzenle) tıkla
4. Dosya metin editöründe açılacak

**Yöntem B — SSH ile:**
```bash
cd /KENDI/YOLUN/httpdocs
nano .env
```
> `nano` bir metin düzenleyicidir. `nano` yoksa `vi .env` dene.

**Düzenlemen gereken alanlar:**

`APP_URL` satırını bul ve domainin doğru olduğundan emin ol:
```env
APP_URL=https://api.onurtemel.com.tr
```

**E-posta ayarları** (iletişim formu çalışması için) — şu satırları bul ve güncelle:
```env
MAIL_MAILER=smtp
MAIL_HOST=mail.onurtemel.com.tr
MAIL_PORT=587
MAIL_USERNAME=info@onurtemel.com.tr
MAIL_PASSWORD=email_sifresi_buraya
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="noreply@onurtemel.com.tr"
MAIL_FROM_NAME="Onur Temel"
```

> **Bu e-posta bilgilerini nereden bulacağım?**
> - **MAIL_HOST:** Hosting firmanızdan sorun. Genellikle `mail.domainadi.com` veya `smtp.domainadi.com` olur.
>   Plesk panelinde: **"Mail"** → **"Mail Settings"** kısmında SMTP sunucu bilgisi bulunur.
> - **MAIL_USERNAME:** Plesk'te oluşturduğun e-posta adresi (ör. `info@onurtemel.com.tr`)
> - **MAIL_PASSWORD:** O e-posta adresinin şifresi
>
> **Henüz e-posta adresin yoksa:**
> 1. Plesk panelinde **"Mail"** sekmesine tıkla
> 2. **"Create Email Address"** (E-posta Adresi Oluştur) butonuna tıkla
> 3. Adres ve şifre belirle
> 4. Bu bilgileri yukarıdaki alanlara yaz

**Kaydetme:**
- **nano kullanıyorsan:** `Ctrl + O` → Enter (kaydet) → `Ctrl + X` (çık)
- **vi kullanıyorsan:** `Esc` → `:wq` yaz → Enter
- **Plesk Dosya Yöneticisi kullanıyorsan:** **"Save"** butonuna tıkla

---

### 1.5 Veritabanı ve Depolama Ayarları

**Neden:** Laravel'in dosya yüklemeleri için `storage/` klasörüne, veritabanı için `database/` klasörüne yazma izni gerekiyor. Ayrıca yüklenen görsellerin web'den erişilebilmesi için bir kısayol (symlink) oluşturulmalı.

#### ADIM 1: Dosya izinlerini ayarla

**SSH ile:**
```bash
cd /KENDI/YOLUN/httpdocs
chmod -R 775 storage bootstrap/cache database
```
> - `chmod` = dosya izinlerini değiştir
> - `-R` = alt klasörler dahil (recursive)
> - `775` = sahibi ve grubu okuyabilir/yazabilir/çalıştırabilir
>
> **chmod komutu hata veriyorsa** (Permission denied):
> ```bash
> # Plesk sunucusunda çalışan kullanıcıyı öğren:
> whoami
> # Sonra sahipliği değiştir:
> chown -R $(whoami):psacln storage bootstrap/cache database
> chmod -R 775 storage bootstrap/cache database
> ```
>
> **SSH erişimin yoksa**, Plesk Dosya Yöneticisinden:
> 1. `httpdocs/storage` klasörüne sağ tıkla → **"Change Permissions"** (İzinleri Değiştir)
> 2. Tüm izin kutucuklarını işaretle
> 3. **"Set permissions recursively"** (Alt klasörlere de uygula) seçeneğini işaretle
> 4. **"OK"** butonuna tıkla
> 5. Aynı işlemi `bootstrap/cache` ve `database` klasörleri için tekrarla

#### ADIM 2: Storage kısayolunu oluştur

```bash
cd /KENDI/YOLUN/httpdocs
php artisan storage:link
```
> Bu komut `public/storage` → `storage/app/public` arasında bir kısayol oluşturur.
> Admin panelden yüklenen görsellerin web sitesinde görünmesi için gerekli.
>
> **`php` bulunamazsa**, tam yol ile:
> ```bash
> /opt/plesk/php/8.3/bin/php artisan storage:link
> ```
> (PHP yolunu Adım 1.4'te bulmuştun)
>
> Ekranda `The [public/storage] link has been created.` mesajını görmelisin.
>
> **SSH symlink oluşturamıyorsa** (bazı paylaşımlı hostinglerde):
> 1. Plesk → Files → `httpdocs/public/` klasörüne git
> 2. `storage` adlı bir klasör oluştur
> 3. Admin panelden fotoğraf yükleyince dosyalar `httpdocs/storage/app/public/` içine kaydedilir
> 4. Bu dosyaları elle `httpdocs/public/storage/` içine kopyalaman gerekebilir

#### ADIM 3: Veritabanını güncelle

```bash
cd /KENDI/YOLUN/httpdocs
php artisan migrate --force
```
> Bu komut veritabanı tablolarının güncel olmasını sağlar.
> `--force` = production ortamında onay sormadan çalış.
>
> **`php` bulunamazsa:** `/opt/plesk/php/8.3/bin/php artisan migrate --force`

---

### 1.6 Filament Assets + Önbellek (Cache) Oluşturma

**Neden:** Admin panel (Filament) kendi CSS ve JavaScript dosyalarını `public/` klasörüne yayınlamalıdır. Bu dosyalar olmadan admin panel **500 hatası** verir. Ayrıca önbellek uygulamanın daha hızlı çalışmasını sağlar.

```bash
cd /KENDI/YOLUN/httpdocs

# ÖNEMLİ: Admin panelin çalışması için Filament asset dosyalarını yayınla
php artisan filament:assets

# Önbellek oluştur
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
> **`filament:assets` komutu ne yapar?**
> Admin panelin ihtiyaç duyduğu CSS ve JavaScript dosyalarını `public/js/filament/` ve `public/css/filament/` klasörlerine kopyalar.
> Bu komut çalıştırılmazsa admin panel **500 Internal Server Error** verir, ancak API endpoint'leri (`/api/...`) normal çalışır.
> Her komutu tek tek çalıştır. Her birinin sonunda bir onay mesajı göreceksin:
> - `Configuration cached successfully.`
> - `Routes cached successfully.`
> - `Blade templates cached successfully.`
>
> **`php` komutu bulunamıyorsa:**
> ```bash
> # PHP'nin tam yolunu bul:
> find /opt/plesk/php -name "php" -type f 2>/dev/null
> # Bulunan yolu kullan (örnek):
> /opt/plesk/php/8.3/bin/php artisan config:cache
> /opt/plesk/php/8.3/bin/php artisan route:cache
> /opt/plesk/php/8.3/bin/php artisan view:cache
> ```
>
> **SSH erişimin hiç yoksa:**
> Plesk → "Scheduled Tasks" (Cron Jobs) üzerinden tüm komutları tek seferde çalıştırabilirsin:
> ```
> cd /KENDI/YOLUN/httpdocs && php artisan filament:assets && php artisan config:cache && php artisan route:cache && php artisan view:cache
> ```

---

### 1.7 API'nin Çalıştığını Test Etme

**Neden:** Devam etmeden önce API'nin doğru çalıştığından emin olalım.

Tarayıcıda şu adresleri aç:

1. **Tanılama Sayfası (İLK BUNU AÇ!):** `https://api.onurtemel.com.tr/debug-check.php`
   - Bu sayfa sunucunun durumunu kontrol eder ve eksikleri gösterir.
   - Tüm satırlar ✅ yeşil olmalı. ❌ kırmızı olanlar sorunlu — açıklamayı oku.
   - En altta hata logları varsa, sorunu orada görebilirsin.
   - ⚠️ **Kurulum tamamlanınca bu dosyayı mutlaka sil!**
     - Plesk Files → `httpdocs/public/` → `debug-check.php` → Sil

2. **API Testi:** `https://api.onurtemel.com.tr/api/personal-info`
   - Ekranda JSON formatında veri görmelisin (süslü parantezli metin, ör: `{"name":"Onur",...}`).
   - Boş sayfa veya hata? → Bölüm 5: Sorun Giderme'ye bak.

3. **Admin Panel:** `https://api.onurtemel.com.tr/admin`
   - Giriş ekranı açılmalı.
   - Giriş bilgileri:
     - **E-posta:** `onur@temel.com`
     - **Şifre:** `admin123`
   - ⚠️ **İlk girişten sonra şifreyi mutlaka değiştir!**
   
   **Admin panel 500 hatası veriyorsa:**
   1. Önce tanılama sayfasını aç (`/debug-check.php`) — hata sebebini göreceksin
   2. Genellikle `filament:assets` veya dosya izinleri eksiktir:
      ```bash
      cd /KENDI/YOLUN/httpdocs
      php artisan filament:assets
      chmod -R 775 storage bootstrap/cache database
      php artisan config:cache
      ```

---

### 1.8 SSL Sertifikası (HTTPS)

**Neden:** Siteye `https://` ile erişilmesi için SSL sertifikası gerekli. Güvenli bağlantı sağlar.

1. Plesk panelinde `api.onurtemel.com.tr`'ye tıkla
2. **"SSL/TLS Certificates"** sekmesine tıkla
3. **"Install a free basic certificate provided by Let's Encrypt"** seçeneğine tıkla
   > "Let's Encrypt" ücretsiz SSL sertifikası sağlar.
4. E-posta adresini gir (sertifika bildirimleri için)
5. **"Install"** butonuna tıkla
6. Kurulum tamamlandıktan sonra **"Redirect from HTTP to HTTPS"** seçeneğini aktif et
   > Bu, `http://` ile girenleri otomatik olarak `https://`'ye yönlendirir.

> ⚠️ SSL sertifikası DNS ayarları yapıldıktan sonra çalışır. DNS henüz yönlendirilmediyse bu adımı sonraya bırak.

---

## BÖLÜM 2: FRONTEND (WEB SİTESİ) KURULUMU

> Bu bölümde `onurtemel.com.tr` ana domaininde Next.js frontend'i kuruyoruz.

---

### 2.1 Frontend Dosya Yolunu Bulma

Tıpkı API için yaptığın gibi, frontend'in dosya yolunu da bulman gerekiyor:

1. Plesk panelinde `onurtemel.com.tr` domainine tıkla
2. **"Hosting & DNS"** → **"Hosting Settings"** kısmına git
3. **"Document root"** değerini not et — bu senin `FRONTEND_DIZINI`

---

### 2.2 Frontend Dosyalarını Yükleme

#### FTP ile (Önerilen):
1. FileZilla ile sunucuya bağlan (Bölüm 1.2'deki gibi)
2. Sağ panelde `onurtemel.com.tr` altındaki `httpdocs/` klasörüne git
3. Önce `httpdocs/` içindeki mevcut dosyaları sil (default index.html vs.)
4. Bilgisayarında arşivi aç → `nathan/.next/standalone/` klasörünün **içindekileri** `httpdocs/` içine yükle
5. Sonra `nathan/.next/static/` klasörünü `httpdocs/.next/static/` olarak yükle
   > `httpdocs/` içinde `.next/` klasörü yoksa oluştur, içine `static/` klasörünü koy
6. `nathan/public/` klasörünü `httpdocs/public/` olarak yükle
7. `nathan/.env.production` dosyasını `httpdocs/.env.local` olarak yükle (adını değiştir)

#### SSH ile:
```bash
# Frontend dizinini bul ve git:
cd /KENDI/FRONTEND/YOLUN/httpdocs

# Mevcut dosyaları temizle:
rm -rf *

# Standalone dosyalarını kopyala:
cp -r /tmp/nathan/.next/standalone/* ./

# Static dosyaları kopyala:
mkdir -p .next/static
cp -r /tmp/nathan/.next/static/* .next/static/

# Public dosyalarını kopyala:
cp -r /tmp/nathan/public ./public

# Ortam dosyasını kopyala ve yeniden adlandır:
cp /tmp/nathan/.env.production .env.local
```

> **Sonuçta `httpdocs/` klasörün şöyle görünmeli:**
> ```
> httpdocs/
>   ├── server.js          ← Ana dosya (Node.js bunu çalıştıracak)
>   ├── node_modules/      ← Bağımlılıklar (standalone ile geldi)
>   ├── .next/
>   │   └── static/        ← CSS, JS dosyaları
>   ├── public/            ← Görseller, fontlar
>   ├── .env.local          ← API adresi ayarı
>   └── package.json
> ```

---

### 2.3 Ortam Dosyasını Kontrol Etme

**Plesk Dosya Yöneticisinden:**
1. `onurtemel.com.tr` → Files → `httpdocs/` → `.env.local` dosyasına tıkla (veya kalem ikonuna)
2. İçeriğin şu olduğunu doğrula:
```
NEXT_PUBLIC_API_URL=https://api.onurtemel.com.tr/api
```

**SSH ile:**
```bash
cat /KENDI/FRONTEND/YOLUN/httpdocs/.env.local
```

> Domain farklıysa düzenle (Plesk Files → Edit veya `nano .env.local`).

---

### 2.4 Plesk'te Node.js Uygulamasını Yapılandırma

**Neden:** Plesk'e bu klasördeki Node.js uygulamasını nasıl çalıştıracağını söylememiz gerekiyor.

1. Plesk panelinde `onurtemel.com.tr` domainine tıkla
2. **"Node.js"** sekmesine tıkla
   > Bu sekmeyi görmüyorsan, Node.js eklentisi kurulu değildir. "Gereksinimler" bölümüne dön.

3. **"Enable Node.js"** butonuna tıkla

4. Aşağıdaki ayarları yap:

   | Alan | Değer | Açıklama |
   |------|-------|----------|
   | **Node.js version** | `18.x` veya `20.x` | Mevcut en yüksek sürümü seç |
   | **Document root** | `/httpdocs` | Web kök dizini |
   | **Application mode** | `production` | Yayın modu |
   | **Application URL** | `https://onurtemel.com.tr` | Site adresi |
   | **Application root** | `/httpdocs` | Uygulama kök dizini |
   | **Application startup file** | `server.js` | Ana dosya |

5. **Environment variables** (Ortam değişkenleri) bölümünde **"Add Variable"** butonuyla şunları ekle:

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_API_URL` | `https://api.onurtemel.com.tr/api` |
   | `NODE_ENV` | `production` |
   | `HOSTNAME` | `0.0.0.0` |

   > `PORT` değişkenini Plesk genellikle otomatik atar. Eğer sormuyorsa ekleme.

6. **"Apply"** / **"Uygula"** butonuna tıkla

7. **"Run App"** / **"Uygulamayı Başlat"** butonuna tıkla
   > Durum **"Running"** veya **"Çalışıyor"** olmalı.
   > Eğer "Stopped" gösteriyorsa → **"App log"** bağlantısına tıklayıp hata mesajını oku.

> **NPM Install gerekli mi?**
> Hayır! Standalone build, kendi `node_modules`'ını içerir. Plesk "Run NPM Install" derse sorun olmaz ama gerekli değildir.

---

### 2.5 SSL Sertifikası (Ana Domain)

1. Plesk panelinde `onurtemel.com.tr`'ye tıkla
2. **"SSL/TLS Certificates"** sekmesine tıkla
3. **"Install a free basic certificate provided by Let's Encrypt"** seçeneğine tıkla
4. **"Include www.onurtemel.com.tr as alternative domain name"** seçeneğini işaretle
5. E-posta adresini gir
6. **"Install"** butonuna tıkla
7. **"Redirect from HTTP to HTTPS"** seçeneğini aktif et

---

### 2.6 Sitenin Çalıştığını Test Etme

Tarayıcıda şu adresi aç: `https://onurtemel.com.tr`

- ✅ Sayfa açılıyorsa ve içerik görünüyorsa → **Tebrikler!** Site çalışıyor.
- ❌ "502 Bad Gateway" veya boş sayfa → Sorun Giderme bölümüne bak.
- ❌ Sayfa açılıyor ama veriler/görseller yüklenmiyor → API bağlantısını kontrol et (Bölüm 3).

---

## BÖLÜM 3: BAĞLANTILARI KONTROL ETME

### 3.1 API'den Veri Geldiğini Doğrulama

Tarayıcıda aç: `https://api.onurtemel.com.tr/api/personal-info`

Veya SSH'dan:
```bash
curl -s https://api.onurtemel.com.tr/api/personal-info | head -100
```
> JSON verisi görmelisin. Hata mesajı görüyorsan API'de sorun var → Bölüm 5.

### 3.2 CORS Kontrolü

**Neden:** Frontend, farklı bir domainden (onurtemel.com.tr) API'ye (api.onurtemel.com.tr) istek atar. Tarayıcılar buna normalde izin vermez. CORS ayarı bu izni verir.

CORS ayarı zaten yapılmış durumda. Doğrulamak için:

**Plesk Dosya Yöneticisi ile:**
1. `api.onurtemel.com.tr` → Files → `httpdocs/config/cors.php` dosyasını aç
2. `allowed_origins` kısmında `https://onurtemel.com.tr` yazıyor mu kontrol et

**SSH ile:**
```bash
cat /KENDI/API/YOLUN/httpdocs/config/cors.php | grep -A5 "allowed_origins"
```

---

## BÖLÜM 4: ADMIN PANEL KULLANIMI

### 4.1 Giriş Yapma

1. Tarayıcıda `https://api.onurtemel.com.tr/admin` adresine git
2. Giriş bilgileri:
   - **E-posta:** `onur@temel.com`
   - **Şifre:** `admin123`
3. ⚠️ **Giriş yaptıktan sonra şifreyi değiştir!**

### 4.2 Şifre Değiştirme

1. Admin panelde sol menüden **"Users"** (Kullanıcılar) sekmesine tıkla
   > Eğer Users sekmesi yoksa, profil ikonuna (sağ üst köşe) tıkla
2. Kendi kullanıcına tıkla
3. **"Password"** alanına yeni şifreyi gir
4. **"Save"** butonuna tıkla

### 4.3 İçerik Yönetimi

Admin paneldeki bölümler:

| Menü | Ne Yapabilirsin |
|------|-----------------|
| **Personal Info** | İsim, ünvan, profil fotoğrafı, biyografi |
| **Projects** | Portföy çalışmaları — başlık, açıklama, görseller |
| **Services** | Sunulan hizmetler — başlık, açıklama, ikon |
| **Blog Posts** | Blog yazıları — başlık, içerik, kapak görseli |
| **Testimonials** | Referans/müşteri yorumları |
| **Skills** | Yetenekler ve yüzdeleri |
| **Education** | Eğitim bilgileri |
| **Experiences** | İş deneyimleri |
| **Site Settings** | Genel ayarlar — site başlığı, menüler, sosyal medya, görünürlük |

### 4.4 Görünürlük Ayarları

**Site Settings** → **Görünürlük Ayarları** bölümünde:

| Toggle | Ne yapar |
|--------|----------|
| **İstatistikleri Göster** | Ana sayfadaki sayaç bölümünü gösterir/gizler |
| **Blog'u Göster** | Blog bölümünü ve menüdeki Blog linkini gösterir/gizler |
| **Referansları Göster** | Müşteri yorumları bölümünü gösterir/gizler |
| **Kayan Yazıyı Göster** | Sayfadaki kayan metin şeridini gösterir/gizler |

---

## BÖLÜM 5: SORUN GİDERME

### Sorun: "No such file or directory" (Dizin bulunamadı)

**Sebep:** Komuttaki dosya yolu sunucundaki gerçek yol ile uyuşmuyor.

**Çözüm:**
```bash
# Doğru yolu bulmak için şu komutları dene:

# API dizinini bul:
find / -name "artisan" -path "*/httpdocs/*" 2>/dev/null

# Frontend dizinini bul:
find / -name "server.js" -path "*/httpdocs/*" 2>/dev/null

# Veya Plesk'in tüm vhost dizinlerini listele:
ls -la /var/www/vhosts/ 2>/dev/null
ls -la /home/ 2>/dev/null
```
> Bulunan yolları komutlarında kullan.

---

### Sorun: "php: command not found"

**Sebep:** PHP CLI, PATH'e eklenmemiş.

**Çözüm:**
```bash
# PHP'nin tam yolunu bul:
find /opt/plesk/php -name "php" -type f 2>/dev/null

# Genellikle şunlardan biri olur:
#   /opt/plesk/php/8.3/bin/php
#   /opt/plesk/php/8.2/bin/php

# Bulunan yolu kullan:
/opt/plesk/php/8.3/bin/php artisan key:generate

# Kolaylık için kısayol oluşturabilirsin:
alias php='/opt/plesk/php/8.3/bin/php'
# Artık "php artisan ..." komutları çalışacaktır (bu oturum için geçerli)
```

---

### Sorun: "500 Internal Server Error"

**Sebep:** Birden fazla nedeni olabilir. Aşağıdaki adımları sırasıyla kontrol et:

**1. Filament Assets eksik mi? (API çalışıyor ama admin panel 500 veriyorsa)**

Eğer `https://api.onurtemel.com.tr/api/personal-info` JSON veri gösteriyor ama
`https://api.onurtemel.com.tr/admin` 500 hatası veriyorsa, **Filament asset dosyaları yayınlanmamış** demektir.

```bash
cd /KENDI/API/YOLUN/httpdocs
php artisan filament:assets
```
> `php` bulunamazsa: `/opt/plesk/php/8.3/bin/php artisan filament:assets`
>
> SSH yoksa: Plesk → Scheduled Tasks → Command:
> `cd /KENDI/API/YOLUN/httpdocs && php artisan filament:assets`
>
> Başarılı olunca `Successfully published assets!` mesajını göreceksin.
> Sonra tarayıcıda admin paneli tekrar dene.

**2. `.env` dosyası eksik veya hatalı mı?**
- `.env` dosyası var mı? → Plesk Files → `httpdocs/` içinde `.env` dosyası olmalı
- `APP_KEY` dolu mu? → `.env` dosyasını aç, `APP_KEY=base64:...` olmalı (boş olmamalı)

**3. Storage dizini yazılabilir mi?**
```bash
cd /KENDI/API/YOLUN/httpdocs
chmod -R 775 storage bootstrap/cache database
```

**4. Log dosyasını kontrol et:**
- Plesk Files → `httpdocs/storage/logs/laravel.log` dosyasını aç
- En alttaki hata mesajını oku

SSH ile:
```bash
cd /KENDI/API/YOLUN/httpdocs
ls -la .env
cat storage/logs/laravel.log | tail -50
```

---

### Sorun: "403 Forbidden"

**Sebep:** Dosya izinleri yanlış.

**Çözüm:**
```bash
cd /KENDI/API/YOLUN/httpdocs
chmod -R 775 storage bootstrap/cache database
```
> Hala çalışmazsa:
> ```bash
> chown -R $(whoami):psacln storage bootstrap/cache database
> ```
> Veya Plesk Files → ilgili klasöre sağ tıkla → "Change Permissions"

---

### Sorun: "404 Not Found" (API endpoint'leri)

**Sebep:** Document Root yanlış ayarlanmış.

**Çözüm:**
1. Plesk → `api.onurtemel.com.tr` → "Hosting Settings"
2. Document Root: `/httpdocs/public` olmalı (sadece `/httpdocs` olmamalı!)
3. `.htaccess` dosyasının varlığını kontrol et:
   Plesk Files → `httpdocs/public/` içinde `.htaccess` dosyası olmalı

---

### Sorun: Frontend Açılıyor Ama Veriler Gelmiyor

**Sebep:** API bağlantısı kurulamıyor (CORS veya URL hatası).

**Çözüm:**
1. Tarayıcıda `F12` tuşuna bas → **"Console"** sekmesine geç
2. Kırmızı hata mesajlarını oku:
   - **"CORS error"** → CORS ayarını kontrol et (Bölüm 3.2)
   - **"Failed to fetch"** → API adresi yanlış veya API çalışmıyor
3. Frontend'in doğru API adresini kullandığını kontrol et:
   Plesk Files → `onurtemel.com.tr/httpdocs/.env.local` dosyasını aç
   İçerikte `NEXT_PUBLIC_API_URL=https://api.onurtemel.com.tr/api` yazmalı

---

### Sorun: Görseller Yüklenmiyor (Admin Panel)

**Sebep:** Storage symlink eksik veya izin hatası.

**Çözüm:**
```bash
cd /KENDI/API/YOLUN/httpdocs

# Symlink'i kontrol et:
ls -la public/storage

# Yoksa oluştur:
php artisan storage:link
# veya: /opt/plesk/php/8.3/bin/php artisan storage:link

# İzinleri düzelt:
chmod -R 775 storage/app/public
```

---

### Sorun: Node.js Uygulaması Başlamıyor (Plesk)

**Sebep:** Startup dosyası bulunamıyor.

**Çözüm:**
1. `server.js` dosyası doğru yerde mi?
   Plesk Files → `onurtemel.com.tr/httpdocs/` içinde `server.js` dosyası olmalı
2. Yoksa standalone dosyalarını doğru yere kopyaladığından emin ol (Bölüm 2.2)
3. Plesk → Node.js → **"Restart App"** butonuna tıkla
4. **"App log"** bağlantısına tıklayıp hata mesajını oku

---

### Sorun: "502 Bad Gateway"

**Sebep:** Node.js uygulaması çöktü veya başlamamış.

**Çözüm:**
1. Plesk → `onurtemel.com.tr` → **"Node.js"**
2. Uygulamanın durumunu kontrol et: **"Running"** yazmalı
3. **"Stopped"** ise → **"Run App"** butonuna tıkla
4. Hala çalışmıyorsa → **"App log"** veya **"Error log"** bağlantısından logları oku
5. Ortam değişkenlerinde `HOSTNAME` = `0.0.0.0` olduğunu doğrula

---

## BÖLÜM 6: GÜNCELLEME VE BAKIM

### 6.1 İçerik Güncelleme
İçerik güncellemeleri (yazılar, görseller, ayarlar) admin panelden yapılır. Dosya yüklemeye gerek yok.

**Admin Panel:** `https://api.onurtemel.com.tr/admin`

### 6.2 Cache Temizleme (Sorun Olursa)

Eğer admin panelden yapılan değişiklikler siteye yansımıyorsa:

**SSH ile:**
```bash
cd /KENDI/API/YOLUN/httpdocs
php artisan config:clear
php artisan cache:clear
php artisan route:clear

# Sonra tekrar cache oluştur:
php artisan config:cache
php artisan route:cache
php artisan view:cache
```
> `php` bulunamazsa tam yol kullan: `/opt/plesk/php/8.3/bin/php artisan ...`

**Plesk Scheduled Tasks ile (SSH yoksa):**
1. Plesk → Scheduled Tasks → Add Task
2. Command:
   ```
   cd /KENDI/API/YOLUN/httpdocs && php artisan config:clear && php artisan cache:clear && php artisan config:cache && php artisan route:cache && php artisan view:cache
   ```
3. Run Now → görevi çalıştır → sonra sil

### 6.3 Node.js Uygulamasını Yeniden Başlatma

Plesk panelinde:
1. `onurtemel.com.tr` → **"Node.js"**
2. **"Restart App"** butonuna tıkla

---

## BÖLÜM 7: GÜVENLİK KONTROL LİSTESİ

Kurulumdan sonra şunları kontrol et:

- [ ] Admin şifresi değiştirildi (`admin123` → güçlü bir şifre)
- [ ] `APP_DEBUG=false` ayarı yapılmış (`.env` dosyasında)
- [ ] `debug-check.php` dosyası silindi (`httpdocs/public/debug-check.php`)
- [ ] SSL sertifikaları aktif (her iki domain için)
- [ ] HTTP → HTTPS yönlendirmesi aktif
- [ ] E-posta ayarları doğru (iletişim formu testi yap)
- [ ] `.env` dosyası tarayıcıdan erişilemez (aşağıdaki testi yap)
- [ ] `database/database.sqlite` tarayıcıdan erişilemez

### Güvenlik Testi:
Tarayıcıda şu adresleri aç — **hiçbiri içerik göstermemeli:**
- `https://api.onurtemel.com.tr/.env` → Sayfa bulunamadı veya Yasak hatası olmalı
- `https://api.onurtemel.com.tr/../database/database.sqlite` → Sayfa bulunamadı olmalı

> Eğer bu adresler içerik gösteriyor ise Document Root ayarı yanlıştır → Bölüm 1.3'e dön.

---

## 📞 Hızlı Referans

| Ne | Nerede |
|----|--------|
| **Web Sitesi** | https://onurtemel.com.tr |
| **Admin Panel** | https://api.onurtemel.com.tr/admin |
| **API Test** | https://api.onurtemel.com.tr/api/personal-info |
| **Admin E-posta** | onur@temel.com |
| **Admin Şifre** | admin123 (değiştir!) |
| **API Dosyaları** | Plesk → api.onurtemel.com.tr → Hosting Settings → Document Root |
| **Frontend Dosyaları** | Plesk → onurtemel.com.tr → Hosting Settings → Document Root |
| **Laravel Log** | (API dizini)/storage/logs/laravel.log |
| **Veritabanı** | (API dizini)/database/database.sqlite |
