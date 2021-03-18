<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Comment;
use App\Models\User;
use App\Models\Beer;

class CommentSeeder extends Seeder {

    public function run() {
        $options = [
            2 => "Not so great", 
            3 => "Good Beer", 
            4 => "Great Beer", 
            5 => "Best Beer Ever!"
        ];
        Comment::truncate();
        $faker = \Faker\Factory::create();
        $users = User::all();
        $beers = Beer::all();
        foreach($users as $user) {
            foreach($beers as $beer) {
                $rand_key  = array_rand($options, 1);
                $rand_days = '-'.rand(3, 30).' days';
                Comment::create([
                    "rating"     => $rand_key,
                    "comment"    => $options[$rand_key],
                    "userID"     => $user->id,
                    "beerID"     => $beer->id,
                    "created_at" => date('Y-m-d H:i:s', strtotime($rand_days, strtotime(date('Y-m-d H:i:s')))),
                    "updated_at" => date('Y-m-d H:i:s', strtotime($rand_days, strtotime(date('Y-m-d H:i:s')))),
                ]);
            }
        }
    }
}