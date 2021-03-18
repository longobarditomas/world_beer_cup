<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder {

    public function run() {
        User::truncate();
        $users = [
            0 => [
                "name" => "Bach",
                "email" => "bach@gmail.com",
                "password" => Hash::make("bach"),
            ],
            1 => [
                "name" => "Mozart",
                "email" => "mozart@gmail.com",
                "password" => Hash::make("mozart"),
            ],
            2 => [
                "name" => "Beethoven",
                "email" => "beethoven@gmail.com",
                "password" => Hash::make("beethoven"),
            ],
            3 => [
                "name" => "Schubert",
                "email" => "schubert@gmail.com",
                "password" => Hash::make("schubert"),
            ],
            4 => [
                "name" => "Chopin",
                "email" => "chopin@gmail.com",
                "password" => Hash::make("chopin"),
            ],
            5 => [
                "name" => "Mendelssohn",
                "email" => "mendelssohn@gmail.com",
                "password" => Hash::make("mendelssohn"),
            ],
            6 => [
                "name" => "Schumann",
                "email" => "schumann@gmail.com",
                "password" => Hash::make("schumann"),
            ],
            7 => [
                "name" => "Wagner",
                "email" => "wagner@gmail.com",
                "password" => Hash::make("wagner"),
            ],
            8 => [
                "name" => "Brahms",
                "email" => "brahms@gmail.com",
                "password" => Hash::make("brahms"),
            ],
            9 => [
                "name" => "Debussy",
                "email" => "debussy@gmail.com",
                "password" => Hash::make("debussy"),
            ],
            10 => [
                "name" => "Ravel",
                "email" => "ravel@gmail.com",
                "password" => Hash::make("ravel"),
            ],
            11 => [
                "name" => "Verdi",
                "email" => "verdi@gmail.com",
                "password" => Hash::make("verdi"),
            ],
            12 => [
                "name" => "Stravinsky",
                "email" => "stravinsky@gmail.com",
                "password" => Hash::make("stravinsky"),
            ],
        ];
        foreach($users as $user){
            User::create($user);
        }
    }
}
