<?php
/**
 * Sunucu Tanılama Sayfası
 * 500 hata nedenini bulmak için kullanılır.
 * KURULUM TAMAMLANINCA BU DOSYAYI SİLİN!
 * 
 * Kullanım: https://api.onurtemel.com.tr/debug-check.php
 */

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<html><head><meta charset='utf-8'><title>Sunucu Tanılama</title>";
echo "<style>body{font-family:monospace;padding:20px;background:#1a1a2e;color:#e0e0e0;} ";
echo ".ok{color:#00ff88;} .fail{color:#ff4444;} .warn{color:#ffaa00;} ";
echo "h2{color:#00d4ff;border-bottom:1px solid #333;padding-bottom:5px;} ";
echo "pre{background:#0d0d1a;padding:15px;border-radius:5px;overflow-x:auto;white-space:pre-wrap;} ";
echo ".section{margin:20px 0;padding:15px;background:#16213e;border-radius:8px;}</style></head><body>";
echo "<h1>🔍 Sunucu Tanılama Raporu</h1>";
echo "<p>Tarih: " . date('Y-m-d H:i:s') . "</p>";

// Proje kök dizini (public'in bir üstü)
$basePath = dirname(__DIR__);

echo "<div class='section'>";
echo "<h2>1. PHP Bilgileri</h2>";
echo "<p>PHP Sürümü: <b>" . phpversion() . "</b> " . (version_compare(phpversion(), '8.2', '>=') ? "<span class='ok'>✅ OK</span>" : "<span class='fail'>❌ PHP 8.2+ gerekli!</span>") . "</p>";
echo "<p>Proje Yolu: <b>" . $basePath . "</b></p>";
echo "<p>Document Root: <b>" . $_SERVER['DOCUMENT_ROOT'] . "</b></p>";
echo "</div>";

// PHP Eklentileri
echo "<div class='section'>";
echo "<h2>2. PHP Eklentileri</h2>";
$requiredExts = ['pdo', 'pdo_sqlite', 'sqlite3', 'mbstring', 'openssl', 'gd', 'fileinfo', 'tokenizer', 'xml', 'ctype', 'json', 'bcmath'];
foreach ($requiredExts as $ext) {
    $loaded = extension_loaded($ext);
    echo "<p>" . ($loaded ? "<span class='ok'>✅</span>" : "<span class='fail'>❌</span>") . " $ext " . ($loaded ? "yüklü" : "<b>EKSİK!</b>") . "</p>";
}
echo "</div>";

// Kritik Dosyalar
echo "<div class='section'>";
echo "<h2>3. Kritik Dosyalar</h2>";
$files = [
    '.env' => 'Ortam dosyası',
    'artisan' => 'Laravel CLI',
    'composer.json' => 'Composer yapılandırması',
    'vendor/autoload.php' => 'Vendor autoload',
    'vendor/laravel/framework/src/Illuminate/Foundation/Application.php' => 'Laravel Framework',
    'vendor/filament/filament/src/FilamentServiceProvider.php' => 'Filament paketi',
    'bootstrap/app.php' => 'Bootstrap',
    'bootstrap/cache/.gitignore' => 'Bootstrap cache dizini',
    'config/app.php' => 'App config',
    'config/database.php' => 'Database config',
    'config/filament.php' => 'Filament config (opsiyonel)',
    'database/database.sqlite' => 'SQLite veritabanı',
    'public/.htaccess' => 'Apache rewrite kuralları',
    'public/index.php' => 'Giriş noktası',
    'public/js/filament/filament/app.js' => 'Filament JS assets',
    'public/css/filament/filament/app.css' => 'Filament CSS assets',
    'storage/logs/laravel.log' => 'Log dosyası',
];
foreach ($files as $file => $desc) {
    $path = $basePath . '/' . $file;
    $exists = file_exists($path);
    echo "<p>" . ($exists ? "<span class='ok'>✅</span>" : "<span class='fail'>❌</span>") . " <code>$file</code> — $desc" . (!$exists ? " <b>BULUNAMADI!</b>" : "") . "</p>";
}
echo "</div>";

// .env İçeriği
echo "<div class='section'>";
echo "<h2>4. .env Dosyası Kontrolü</h2>";
$envPath = $basePath . '/.env';
if (file_exists($envPath)) {
    $envContent = file_get_contents($envPath);
    $envLines = explode("\n", $envContent);
    $checkKeys = ['APP_KEY', 'APP_URL', 'APP_DEBUG', 'APP_ENV', 'DB_CONNECTION', 'DB_DATABASE'];
    foreach ($envLines as $line) {
        $line = trim($line);
        if (empty($line) || $line[0] === '#') continue;
        $parts = explode('=', $line, 2);
        if (count($parts) === 2 && in_array($parts[0], $checkKeys)) {
            $key = $parts[0];
            $val = $parts[1];
            // APP_KEY kontrolü
            if ($key === 'APP_KEY') {
                $ok = !empty($val) && strlen($val) > 10;
                echo "<p>" . ($ok ? "<span class='ok'>✅</span>" : "<span class='fail'>❌</span>") . " APP_KEY = " . ($ok ? substr($val, 0, 15) . "..." : "<b>BOŞ veya KISA!</b>") . "</p>";
            } else {
                echo "<p><span class='ok'>✅</span> $key = $val</p>";
            }
        }
    }
    // SESSION_DRIVER kontrolü
    if (strpos($envContent, 'SESSION_DRIVER') !== false) {
        preg_match('/SESSION_DRIVER=(.*)/', $envContent, $m);
        echo "<p><span class='ok'>ℹ️</span> SESSION_DRIVER = " . trim($m[1] ?? 'bilinmiyor') . "</p>";
    } else {
        echo "<p><span class='warn'>⚠️</span> SESSION_DRIVER tanımlanmamış (varsayılan: file)</p>";
    }
} else {
    echo "<p class='fail'>❌ .env dosyası bulunamadı! Bu 500 hatasının ana sebebidir.</p>";
}
echo "</div>";

// Dizin İzinleri
echo "<div class='section'>";
echo "<h2>5. Dizin İzinleri</h2>";
$dirs = [
    'storage' => 'Ana storage',
    'storage/app' => 'Uygulama dosyaları',
    'storage/app/public' => 'Herkese açık dosyalar',
    'storage/framework' => 'Framework cache',
    'storage/framework/cache' => 'Cache verileri',
    'storage/framework/sessions' => 'Oturum dosyaları',
    'storage/framework/views' => 'Derlenmiş görünümler',
    'storage/logs' => 'Log dosyaları',
    'bootstrap/cache' => 'Bootstrap cache',
    'database' => 'Veritabanı dizini',
];
foreach ($dirs as $dir => $desc) {
    $path = $basePath . '/' . $dir;
    if (!is_dir($path)) {
        echo "<p><span class='fail'>❌</span> <code>$dir/</code> — $desc — <b>DİZİN YOK!</b></p>";
    } else {
        $writable = is_writable($path);
        $perms = substr(sprintf('%o', fileperms($path)), -4);
        echo "<p>" . ($writable ? "<span class='ok'>✅</span>" : "<span class='fail'>❌</span>") . " <code>$dir/</code> ($perms) — $desc" . (!$writable ? " — <b>YAZMA İZNİ YOK!</b>" : "") . "</p>";
    }
}
echo "</div>";

// SQLite Veritabanı
echo "<div class='section'>";
echo "<h2>6. Veritabanı Kontrolü</h2>";
$dbPath = $basePath . '/database/database.sqlite';
if (file_exists($dbPath)) {
    echo "<p><span class='ok'>✅</span> SQLite dosyası mevcut (" . round(filesize($dbPath)/1024) . " KB)</p>";
    $dbWritable = is_writable($dbPath);
    echo "<p>" . ($dbWritable ? "<span class='ok'>✅</span>" : "<span class='fail'>❌</span>") . " Veritabanı yazılabilir" . (!$dbWritable ? " — <b>YAZMA İZNİ GEREKLİ!</b>" : "") . "</p>";
    $dbDirWritable = is_writable(dirname($dbPath));
    echo "<p>" . ($dbDirWritable ? "<span class='ok'>✅</span>" : "<span class='fail'>❌</span>") . " database/ dizini yazılabilir" . (!$dbDirWritable ? " — <b>SQLite için dizin de yazılabilir olmalı!</b>" : "") . "</p>";
    
    // Tablo kontrolü
    if (extension_loaded('pdo_sqlite')) {
        try {
            $pdo = new PDO('sqlite:' . $dbPath);
            $tables = $pdo->query("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name")->fetchAll(PDO::FETCH_COLUMN);
            echo "<p><span class='ok'>✅</span> Tablolar (" . count($tables) . "): " . implode(', ', $tables) . "</p>";
            
            // users tablosu kontrolü
            if (in_array('users', $tables)) {
                $userCount = $pdo->query("SELECT COUNT(*) FROM users")->fetchColumn();
                echo "<p><span class='ok'>✅</span> users tablosunda $userCount kullanıcı var</p>";
            }
        } catch (Exception $e) {
            echo "<p><span class='fail'>❌</span> Veritabanı okunamadı: " . $e->getMessage() . "</p>";
        }
    }
} else {
    echo "<p class='fail'>❌ database.sqlite bulunamadı!</p>";
}
echo "</div>";

// Symlink kontrolü
echo "<div class='section'>";
echo "<h2>7. Storage Symlink</h2>";
$symlinkPath = $basePath . '/public/storage';
if (is_link($symlinkPath)) {
    $target = readlink($symlinkPath);
    echo "<p><span class='ok'>✅</span> Symlink mevcut: public/storage → $target</p>";
    echo "<p>" . (is_dir($symlinkPath) ? "<span class='ok'>✅</span> Hedef erişilebilir" : "<span class='fail'>❌</span> Hedef erişilemiyor (kırık symlink!)") . "</p>";
} elseif (is_dir($symlinkPath)) {
    echo "<p><span class='warn'>⚠️</span> public/storage bir dizin (symlink değil) — çalışabilir ama ideal değil</p>";
} else {
    echo "<p><span class='fail'>❌</span> public/storage symlink'i yok — <code>php artisan storage:link</code> çalıştır</p>";
}
echo "</div>";

// Laravel Log
echo "<div class='section'>";
echo "<h2>8. Son Hata Logları</h2>";
$logPath = $basePath . '/storage/logs/laravel.log';
if (file_exists($logPath)) {
    $logSize = filesize($logPath);
    echo "<p>Log dosyası boyutu: " . round($logSize/1024) . " KB</p>";
    if ($logSize > 0) {
        // Son 3000 karakteri al
        $log = file_get_contents($logPath, false, null, max(0, $logSize - 3000));
        echo "<pre>" . htmlspecialchars($log) . "</pre>";
    } else {
        echo "<p><span class='warn'>⚠️</span> Log dosyası boş — henüz hata kaydedilmemiş</p>";
    }
} else {
    echo "<p><span class='fail'>❌</span> laravel.log bulunamadı</p>";
}
echo "</div>";

// Laravel Boot Testi
echo "<div class='section'>";
echo "<h2>9. Laravel Boot Testi</h2>";
try {
    require $basePath . '/vendor/autoload.php';
    echo "<p><span class='ok'>✅</span> vendor/autoload.php yüklendi</p>";
    
    $app = require_once $basePath . '/bootstrap/app.php';
    echo "<p><span class='ok'>✅</span> Laravel uygulaması oluşturuldu</p>";
    
    $kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
    echo "<p><span class='ok'>✅</span> HTTP Kernel oluşturuldu</p>";
    
} catch (Throwable $e) {
    echo "<p><span class='fail'>❌</span> Laravel başlatılamadı!</p>";
    echo "<pre>Hata: " . htmlspecialchars($e->getMessage()) . "\n\n";
    echo "Dosya: " . htmlspecialchars($e->getFile()) . ":" . $e->getLine() . "\n\n";
    echo "Stack Trace:\n" . htmlspecialchars($e->getTraceAsString()) . "</pre>";
}
echo "</div>";

echo "<div class='section' style='background:#2a1a1a;border:1px solid #ff4444;'>";
echo "<h2>⚠️ GÜVENLİK UYARISI</h2>";
echo "<p><b>Bu dosyayı kurulum tamamlandıktan sonra mutlaka silin!</b></p>";
echo "<p>Silmek için: Plesk Files → httpdocs/public/ → debug-check.php → Sil</p>";
echo "<p>Veya SSH: <code>rm /KENDI/API/YOLUN/httpdocs/public/debug-check.php</code></p>";
echo "</div>";

echo "</body></html>";
