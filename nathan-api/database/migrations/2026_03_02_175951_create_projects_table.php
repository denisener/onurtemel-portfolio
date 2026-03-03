<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('cover_image')->nullable();
            $table->string('category')->nullable();
            $table->string('year')->nullable();
            $table->enum('project_type', ['photo', 'video', 'mixed'])->default('photo');
            $table->boolean('featured')->default(false);
            $table->text('overview')->nullable();
            $table->json('objectives')->nullable();
            $table->json('gallery')->nullable();   // [{imagePath, alt, caption}]
            $table->json('videos')->nullable();    // [{title, youtubeUrl, thumbnailPath, duration}]
            $table->json('testimonial')->nullable(); // {quote, name, role}
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
