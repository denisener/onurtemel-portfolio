<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageUrl;
use App\Http\Controllers\Controller;
use App\Models\Project;

class ProjectController extends Controller
{
    private function transformProject($project): array
    {
        $data = ImageUrl::transformModel($project, ['cover_image']);
        // Galeri ve video içindeki görsel yollarını dönüştür
        if (!empty($data['gallery'])) {
            $data['gallery'] = ImageUrl::transformJsonImages($data['gallery'], ['imagePath']);
        }
        if (!empty($data['videos'])) {
            $data['videos'] = ImageUrl::transformJsonImages($data['videos'], ['thumbnailPath']);
        }
        return $data;
    }

    public function index()
    {
        $projects = Project::active()
            ->orderBy('sort_order')
            ->orderByDesc('year')
            ->get();

        $data = $projects->map(fn($p) => $this->transformProject($p))->all();
        return response()->json($data);
    }

    public function featured()
    {
        $projects = Project::active()
            ->featured()
            ->orderBy('sort_order')
            ->limit(6)
            ->get();

        $data = $projects->map(fn($p) => $this->transformProject($p))->all();
        return response()->json($data);
    }

    public function show(string $slug)
    {
        $project = Project::where('slug', $slug)->firstOrFail();
        return response()->json($this->transformProject($project));
    }
}
