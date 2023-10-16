<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // create 10 items for each table and insert data fake method for this tables: users, products, categories, sales, categories, departaments, roles
        for ($i=0; $i < 10; $i++) { 
            DB::table('users')->insert([
                'name' => fake()->name(),
                'email' => fake()->email(),
                'password' => bcrypt('12345678'),
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
                'phone' => fake()->phoneNumber(),
                
            ]);
        }
    }
}
