<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;
use DB;

class FavoriteController extends Controller {

    public function index(Request $request) {
        return response()->json(Favorite::with('beer')->where('userID', $request->user()->id)->get());
    }

    public function create(Request $request) {
        $favorite = Favorite::create([
            'userID'       => $request->user()->id,
            'beerID'       => $request->input('beerId'),
            'created_at'   => now(),
            'updated_at'   => now(),
        ]);
        return response()->json(Favorite::with('beer')->where('userID', $request->user()->id)->get());
    }

    public function delete(Request $request, $beerId = null) {
        $favorite = Favorite::where('userID', $request->user()->id)->where('beerId', $beerId)->delete();
        return response()->json(Favorite::with('beer')->where('userID', $request->user()->id)->get());
    }

}
