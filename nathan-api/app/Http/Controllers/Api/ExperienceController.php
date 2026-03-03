<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Experience;

class ExperienceController extends Controller
{
    public function __invoke()
    {
        $experiences = Experience::active()->orderBy('sort_order')->get();
        return response()->json($experiences);
    }
}
