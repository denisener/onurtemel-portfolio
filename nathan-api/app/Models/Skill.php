<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    public array $imageFields = ['logo'];
    public array $jsonImageFields = [];

    protected $fillable = ['name', 'logo', 'percentage', 'skill_type', 'sort_order', 'is_active'];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
