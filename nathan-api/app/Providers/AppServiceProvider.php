<?php

namespace App\Providers;

use App\Models\BlogPost;
use App\Models\PersonalInfo;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Testimonial;
use App\Observers\ImageConvertObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Görselleri otomatik WebP'ye çevir
        Project::observe(ImageConvertObserver::class);
        PersonalInfo::observe(ImageConvertObserver::class);
        BlogPost::observe(ImageConvertObserver::class);
        Testimonial::observe(ImageConvertObserver::class);
        Skill::observe(ImageConvertObserver::class);
    }
}
