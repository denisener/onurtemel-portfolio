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
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('site_title')->nullable();
            $table->string('site_description')->nullable();
            $table->json('menus')->nullable();          // [{text, href}]
            $table->json('social_links')->nullable();    // [{platform, url}]
            $table->string('footer_text')->nullable();
            $table->json('marquee_texts')->nullable();   // ["text1", "text2"]
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
