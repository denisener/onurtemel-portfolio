<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageUrl;
use App\Http\Controllers\Controller;
use App\Models\Skill;

class SkillController extends Controller
{
    public function __invoke()
    {
        $skills = Skill::active()->orderBy('sort_order')->get();
        return response()->json(ImageUrl::transformCollection($skills, ['logo']));
    }
}
