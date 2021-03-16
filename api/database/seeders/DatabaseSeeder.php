<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Hash;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        User::create([
            'name' => 'Alex',
            'email' => 'alex@alex.com',
            'password' => Hash::make('pwdpwd'),
        ]);
        User::create([
            'name' => 'Bill',
            'email' => 'bill@gmail.com',
            'password' => Hash::make('bill'),
        ]);
    }
}
