<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    /**
     * WebP dönüştürme için görsel alanları
     */
    public array $imageFields = ['cover_image'];
    public array $jsonImageFields = [
        'gallery' => ['imagePath'],
        'videos' => ['thumbnailPath'],
    ];

    protected $fillable = [
        'title', 'slug', 'cover_image', 'category', 'year',
        'project_type', 'featured', 'overview', 'objectives',
        'gallery', 'videos', 'testimonial', 'sort_order', 'is_active',
    ];

    protected $casts = [
        'objectives' => 'array',
        'gallery' => 'array',
        'videos' => 'array',
        'testimonial' => 'array',
        'featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('featured', true);
    }
}
