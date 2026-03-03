<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PersonalInfo extends Model
{
    public array $imageFields = ['profile_image'];
    public array $jsonImageFields = [];

    protected $fillable = [
        'name', 'title_font_size', 'title', 'subtitle', 'about_title',
        'bio1', 'bio2', 'profile_image', 'available_for_work', 'stats',
    ];

    protected $casts = [
        'stats' => 'array',
        'available_for_work' => 'boolean',
    ];
}
