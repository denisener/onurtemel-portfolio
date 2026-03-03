<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\PersonalInfoController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\BlogPostController;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\EducationController;
use App\Http\Controllers\Api\ExperienceController;
use App\Http\Controllers\Api\TestimonialController;
use App\Http\Controllers\Api\SiteSettingController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\UploadController;

// Projects
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/featured', [ProjectController::class, 'featured']);
Route::get('/projects/{slug}', [ProjectController::class, 'show']);

// Single resource endpoints
Route::get('/personal-info', PersonalInfoController::class);
Route::get('/services', ServiceController::class);
Route::get('/skills', SkillController::class);
Route::get('/education', EducationController::class);
Route::get('/experiences', ExperienceController::class);
Route::get('/testimonials', TestimonialController::class);
Route::get('/site-settings', SiteSettingController::class);

// Blog
Route::get('/blog-posts', [BlogPostController::class, 'index']);
Route::get('/blog-posts/{slug}', [BlogPostController::class, 'show']);

// Contact
Route::post('/contact', ContactController::class);

// Upload (authenticated)
Route::post('/upload', UploadController::class);
