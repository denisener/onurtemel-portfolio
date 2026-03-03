<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;

class ServiceController extends Controller
{
    public function __invoke()
    {
        $services = Service::active()->orderBy('sort_order')->get();
        return response()->json($services);
    }
}
