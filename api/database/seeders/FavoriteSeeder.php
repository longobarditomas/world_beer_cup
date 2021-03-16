<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Favorite;

class FavoriteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $favorites = [
            0 => [
                "userID" => 2,
                "beerID" => 1,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            1 => [
                "userID" => 2,
                "beerID" => 2,
                "created_at" => now(),
                "updated_at" => now(),
            ]
        ];
        Favorite::truncate();
        $faker = \Faker\Factory::create();
        foreach($favorites as $favorite){
            Favorite::create($favorite);
        }
    }
}
