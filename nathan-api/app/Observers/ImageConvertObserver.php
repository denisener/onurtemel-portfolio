<?php

namespace App\Observers;

use App\Services\ImageService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

/**
 * Upload edilen görselleri otomatik olarak WebP'ye çevirir.
 * Her modelin $imageFields property'si ile hangi alanların
 * dönüştürüleceği belirlenir.
 */
class ImageConvertObserver
{
    /**
     * Model kaydedildiğinde (create/update) görsel alanlarını kontrol et.
     */
    public function saved(Model $model): void
    {
        $imageFields = $model->imageFields ?? [];
        $jsonImageFields = $model->jsonImageFields ?? [];
        $changed = false;

        // Basit string alanları kontrol et (cover_image, profile_image vb.)
        foreach ($imageFields as $field) {
            $path = $model->getAttribute($field);
            if (!$path || !is_string($path)) continue;

            // Zaten webp ise atla
            if (strtolower(pathinfo($path, PATHINFO_EXTENSION)) === 'webp') continue;

            // Storage'da var mı kontrol et (upload edilmiş dosya)
            if (!Storage::disk('public')->exists($path)) continue;

            $webpPath = ImageService::convertToWebp($path, 'public');
            if ($webpPath !== $path) {
                $model->setAttribute($field, $webpPath);
                $changed = true;
            }
        }

        // JSON dizi alanları kontrol et (gallery[].imagePath, videos[].thumbnailPath vb.)
        foreach ($jsonImageFields as $field => $imageKeys) {
            $items = $model->getAttribute($field);
            if (!is_array($items)) continue;

            $itemsChanged = false;
            foreach ($items as $i => $item) {
                foreach ($imageKeys as $key) {
                    if (!isset($item[$key]) || !is_string($item[$key])) continue;
                    if (strtolower(pathinfo($item[$key], PATHINFO_EXTENSION)) === 'webp') continue;
                    if (!Storage::disk('public')->exists($item[$key])) continue;

                    $webpPath = ImageService::convertToWebp($item[$key], 'public');
                    if ($webpPath !== $item[$key]) {
                        $items[$i][$key] = $webpPath;
                        $itemsChanged = true;
                    }
                }
            }

            if ($itemsChanged) {
                $model->setAttribute($field, $items);
                $changed = true;
            }
        }

        // Sonsuz döngüyü önlemek için saveQuietly kullan
        if ($changed) {
            $model->saveQuietly();
        }
    }
}
