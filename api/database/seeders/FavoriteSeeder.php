<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Favorite;
use App\Models\User;
use App\Models\Beer;

class FavoriteSeeder extends Seeder {
    
    public function run() {
        Favorite::truncate();
        $faker = \Faker\Factory::create();
        $users = User::all();
        $count = Beer::count();
        foreach($users as $user) {
            for($i = 1; $i <= 5; $i++) {
                $beerID = rand(1, $count);
                $rand_days = '-'.rand(3, 30).' days';
                $user_favs = Favorite::where('userID', $user->id)->pluck('beerID')->toArray();
                if (!in_array($beerID, $user_favs)) {
                    Favorite::create([
                        "userID"     => $user->id,
                        "beerID"     => $beerID,
                        "created_at" => date('Y-m-d H:i:s', strtotime($rand_days, strtotime(date('Y-m-d H:i:s')))),
                        "updated_at" => date('Y-m-d H:i:s', strtotime($rand_days, strtotime(date('Y-m-d H:i:s')))),
                    ]);
                }
            }
        }
    }
}
