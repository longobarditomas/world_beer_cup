<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Comment;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comments = [
            0 => [
                "rating" => 4,
                "comment" => "Second Best Beer Ever",
                "userID" => 2,
                "beerID" => 1,
                "created_at" => "2020-09-21 10:10:10",
                "updated_at" => "2020-09-21 10:10:10",
            ],
            1 => [
                "rating" => 3,
                "comment" => "Not so great",
                "userID" => 2,
                "beerID" => 2,
                "created_at" => "2020-10-21 10:10:10",
                "updated_at" => "2020-10-21 10:10:10",
            ],
            2 => [
                "rating" => 5,
                "comment" => "Best Beer Ever!",
                "userID" => 2,
                "beerID" => 3,
                "created_at" => "2021-01-20 10:10:10",
                "updated_at" => "2021-01-20 10:10:10",
            ],
            3 => [
                "rating" => 4,
                "comment" => "Great Beer.",
                "userID" => 1,
                "beerID" => 3,
                "created_at" => "2021-02-16 10:10:10",
                "updated_at" => "2021-02-16 10:10:10",
            ],
        ];
        Comment::truncate();
        $faker = \Faker\Factory::create();
        foreach($comments as $comment){
            Comment::create($comment);
        }
    }
}
