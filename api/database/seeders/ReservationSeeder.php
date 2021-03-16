<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Reservation;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reservations = [
            0 => [
                "userID" => 2,
                "party" => 4,
                "terrace" => 0,
                "requeriments" => "Very Cold Beer!",
                "date" => '2021-03-10 20:00:00',
                "created_at" => NULL,
                "updated_at" => NULL,
            ],
            1 => [
                "userID" => 2,
                "party" => 8,
                "terrace" => 1,
                "requeriments" => "Be Cool!",
                "date" => '2021-03-17 22:00:00',
                "created_at" => now(),
                "updated_at" => now(),
            ]
        ];
        Reservation::truncate();
        $faker = \Faker\Factory::create();
        foreach($reservations as $reservation){
            Reservation::create($reservation);
        }
    }
}
