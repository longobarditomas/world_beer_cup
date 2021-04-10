<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeerController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\CommentController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/beers', [BeerController::class, 'index']);
Route::get('/beers/top_beers', [BeerController::class, 'topBeers']);

Route::get('/comments', [CommentController::class, 'index']);
Route::get('/getComments/{beerID?}', [CommentController::class, 'getComments']);

Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::get('/reservations', [ReservationController::class, 'index']);
    Route::post('/reservations', [ReservationController::class, 'store']);
    Route::get('/reservations/{reservationID?}', [ReservationController::class, 'show']);
    Route::delete('/reservations/{reservationID?}', [ReservationController::class, 'destroy']);
    
    Route::post('/comments', [CommentController::class, 'create']);
    
    Route::get('/favorites', [FavoriteController::class, 'index']);
    Route::post('/favorites', [FavoriteController::class, 'create']);
    Route::delete('/favorites/{beerID?}', [FavoriteController::class, 'delete']);
});
