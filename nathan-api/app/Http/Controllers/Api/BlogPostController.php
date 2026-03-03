<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageUrl;
use App\Http\Controllers\Controller;
use App\Models\BlogPost;

class BlogPostController extends Controller
{
    public function index()
    {
        $posts = BlogPost::active()
            ->orderByDesc('published_at')
            ->get();

        return response()->json(ImageUrl::transformCollection($posts, ['cover_image']));
    }

    public function show(string $slug)
    {
        $post = BlogPost::where('slug', $slug)->firstOrFail();
        return response()->json(ImageUrl::transformModel($post, ['cover_image']));
    }
}
