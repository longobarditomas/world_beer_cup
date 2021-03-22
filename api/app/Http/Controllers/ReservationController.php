<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{

    public function index(Request $request) {
        return response()->json(Reservation::where('userID', $request->user()->id)->where('date', '>', now())->get());
    }

    public function store(Request $request) {
        $reservation = Reservation::create([
            'userID'       => $request->user()->id,
            'party'        => $request->input('party'),
            'requeriments' => $request->input('requeriments'),
            'date'         => $request->input('date'),
            'created_at'   => now(),
            'updated_at'   => now(),
        ]);
        return response()->json($reservation);
    }

    public function show($reservationID = null) {
        return response()->json(Reservation::findOrFail($reservationID));
    }

    public function destroy(Request $request, $id = null) {
        $reservation = Reservation::findOrFail($id)->delete();
        return response()->json(Reservation::where('userID', $request->user()->id)->where('date', '>', now())->get());
    }
}
