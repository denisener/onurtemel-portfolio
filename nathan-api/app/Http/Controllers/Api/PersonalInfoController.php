<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageUrl;
use App\Http\Controllers\Controller;
use App\Models\PersonalInfo;

class PersonalInfoController extends Controller
{
    public function __invoke()
    {
        $info = PersonalInfo::first();
        if (!$info) return response()->json(null);
        return response()->json(ImageUrl::transformModel($info, ['profile_image']));
    }
}
