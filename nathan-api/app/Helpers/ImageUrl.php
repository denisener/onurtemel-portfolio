<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;

class ImageUrl
{
    /**
     * Görsel yolunu tam URL'ye çevirir.
     * - Storage'da varsa → full storage URL döner (upload edilmiş dosya)
     * - Yoksa → olduğu gibi döner (Next.js public klasöründen sunulur)
     */
    public static function resolve(?string $path): ?string
    {
        if (!$path) return null;
        if (str_starts_with($path, 'http')) return $path;
        if (Storage::disk('public')->exists($path)) {
            return url('storage/' . $path);
        }
        return $path;
    }

    /**
     * Model verisindeki belirtilen alanları URL'ye çevirir.
     */
    public static function transformModel($model, array $imageFields): array
    {
        $data = $model->toArray();
        foreach ($imageFields as $field) {
            if (isset($data[$field]) && is_string($data[$field])) {
                $data[$field] = self::resolve($data[$field]);
            }
        }
        return $data;
    }

    /**
     * Collection'daki her modelin görsel alanlarını dönüştürür.
     */
    public static function transformCollection($collection, array $imageFields): array
    {
        return $collection->map(fn($item) => self::transformModel($item, $imageFields))->all();
    }

    /**
     * JSON dizisi içindeki görsel alanlarını dönüştürür (gallery, videos vb.)
     */
    public static function transformJsonImages(?array $items, array $imageKeys): ?array
    {
        if (!$items) return $items;
        return array_map(function ($item) use ($imageKeys) {
            foreach ($imageKeys as $key) {
                if (isset($item[$key]) && is_string($item[$key])) {
                    $item[$key] = self::resolve($item[$key]);
                }
            }
            return $item;
        }, $items);
    }
}
