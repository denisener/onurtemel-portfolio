<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'site_title', 'site_description', 'menus',
        'social_links', 'footer_text', 'marquee_texts',
        'show_stats', 'show_blog', 'show_testimonials', 'show_marquee',
        'contact_email',
    ];

    protected $casts = [
        'menus' => 'array',
        'social_links' => 'array',
        'marquee_texts' => 'array',
        'show_stats' => 'boolean',
        'show_blog' => 'boolean',
        'show_testimonials' => 'boolean',
        'show_marquee' => 'boolean',
    ];
}
