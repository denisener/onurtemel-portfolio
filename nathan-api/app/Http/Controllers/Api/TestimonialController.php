<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageUrl;
use App\Http\Controllers\Controller;
use App\Models\Testimonial;

class TestimonialController extends Controller
{
    public function __invoke()
    {
        $testimonials = Testimonial::active()->orderBy('sort_order')->get();
        return response()->json(ImageUrl::transformCollection($testimonials, ['avatar']));
    }
}
