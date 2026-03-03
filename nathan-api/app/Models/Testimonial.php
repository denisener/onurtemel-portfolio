<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    public array $imageFields = ['avatar'];
    public array $jsonImageFields = [];

    protected $fillable = ['name', 'role', 'quote', 'avatar', 'sort_order', 'is_active'];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
