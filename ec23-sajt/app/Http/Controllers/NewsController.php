<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
{
    $news = DB::table('events')
                ->orderBy('date_time', 'desc')
                ->take(3)
                ->get();

    return response()->json($news);
}
}

