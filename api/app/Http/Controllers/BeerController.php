<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Beer;
use App\Models\Favorite;
use DB;

class BeerController extends Controller {

    public function index() {
        return response()->json(Beer::all());
    }

    public function topBeers(Request $request) {
        $topBeers = Favorite::select(DB::raw('count(*) as counta, beerID'))->with('beer')->groupBy('beerID')->orderBy('counta', 'DESC')->get();
        return response()->json($topBeers);
    }

}
