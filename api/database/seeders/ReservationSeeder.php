<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Reservation;
use App\Models\User;

class ReservationSeeder extends Seeder {

    public function run() {
        Reservation::truncate();
        $faker = \Faker\Factory::create();
        $users = User::all();
        foreach($users as $user) {
            Reservation::create([
                "userID"       => $user->id,
                "party"        => 6,
                "requeriments" => "Be Cool!",
                "date"         => date('Y-m-d H:i:s', strtotime('15 days', strtotime(date('Y-m-d 20:30:00')))),
                "created_at"   => now(),
                "updated_at"   => now(),
            ]);
        }
    }
}
