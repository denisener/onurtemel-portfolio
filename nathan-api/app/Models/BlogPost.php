<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    public array $imageFields = ['cover_image'];
    public array $jsonImageFields = [];

    protected $fillable = [
        'title', 'slug', 'cover_image', 'category',
        'excerpt', 'content', 'published_at', 'is_active',
    ];

    protected $casts = [
        'published_at' => 'date',
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
