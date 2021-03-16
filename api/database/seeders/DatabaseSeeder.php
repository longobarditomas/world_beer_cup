<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {

        $this->call([
            UserSeeder::class,
            BeerSeeder::class,
            CommentSeeder::class,
            ReservationSeeder::class,
            FavoriteSeeder::class,
        ]);

        /* Book::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 50; $i++) {
            Book::create([
                'title' => $faker->sentence,
                'author' => $faker->name,
            ]);
        } */

    }
}
