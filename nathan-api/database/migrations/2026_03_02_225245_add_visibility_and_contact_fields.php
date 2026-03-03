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
        Schema::table('site_settings', function (Blueprint $table) {
            $table->boolean('show_stats')->default(true)->after('marquee_texts');
            $table->boolean('show_blog')->default(true)->after('show_stats');
            $table->boolean('show_testimonials')->default(true)->after('show_blog');
            $table->boolean('show_marquee')->default(true)->after('show_testimonials');
            $table->string('contact_email')->nullable()->after('show_marquee');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('site_settings', function (Blueprint $table) {
            $table->dropColumn(['show_stats', 'show_blog', 'show_testimonials', 'show_marquee', 'contact_email']);
        });
    }
};
