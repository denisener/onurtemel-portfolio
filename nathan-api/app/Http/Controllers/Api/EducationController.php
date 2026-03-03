<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Education;

class EducationController extends Controller
{
    public function __invoke()
    {
        $education = Education::active()->orderBy('sort_order')->get();
        return response()->json($education);
    }
}
