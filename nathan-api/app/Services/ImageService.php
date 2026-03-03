<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;

class ImageService
{
    /**
     * Upload edilen görseli WebP formatına çevirip kaydeder.
     * Filament FileUpload sonrası çağrılır.
     *
     * @param string $storedPath  Storage disk'teki dosya yolu (örn: uploads/abc123.jpg)
     * @param string $disk        Storage disk adı
     * @return string             WebP'ye çevrilmiş dosyanın yolu
     */
    public static function convertToWebp(string $storedPath, string $disk = 'public'): string
    {
        $fullPath = Storage::disk($disk)->path($storedPath);

        // Zaten webp ise dönüştürmeye gerek yok
        if (strtolower(pathinfo($fullPath, PATHINFO_EXTENSION)) === 'webp') {
            return $storedPath;
        }

        // Yeni dosya adı (.webp)
        $webpPath = pathinfo($storedPath, PATHINFO_DIRNAME) . '/'
            . pathinfo($storedPath, PATHINFO_FILENAME) . '.webp';
        $webpFullPath = Storage::disk($disk)->path($webpPath);

        // Intervention Image ile WebP'ye çevir (kalite: 85)
        $image = Image::read($fullPath);
        $image->toWebp(85)->save($webpFullPath);

        // Orijinal dosyayı sil
        Storage::disk($disk)->delete($storedPath);

        return $webpPath;
    }
}
