<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;

class SiteSettingController extends Controller
{
    public function __invoke()
    {
        $settings = SiteSetting::first();
        if (!$settings) return response()->json(null);
        return response()->json($settings);
    }
}
