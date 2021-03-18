<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class DatabaseSeeder extends Seeder {

    public function run() {
        $this->call([
            UserSeeder::class,
            BeerSeeder::class,
            CommentSeeder::class,
            ReservationSeeder::class,
            FavoriteSeeder::class,
        ]);
    }
}
