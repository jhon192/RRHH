<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Factory as faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $faker = Faker::create();

        DB::table('roles')->insert([
            'name' => 'admin',
            'description' => 'Administrator',
            'permissions' => '{
                {
                    "name": "create",
                    "working with": "all"
                },
                {
                    "name": "read",
                    "working with": "all"
                },
                {
                    "name": "update",
                    "working with": "all"
                },
                {
                    "name": "delete",
                    "working with": "all"
                }
            }',
        ]);

        DB::table('users')->insert([
            "id" => 1,
            'name' => 'Jhon Garcia',
            'email' => 'jhon19.2@outlook.com',
            'password' => bcrypt('123456'),
            "role_id" => 1,
        ]);
        // create 10 items for each table and insert data fake method for this tables: users, products, categories, sales, categories, departaments, roles
        for ($i = 0; $i < 10; $i++) {
            DB::table('users')->insert([
                'name' => fake()->name(),
                'email' => fake()->email(),
                'password' => bcrypt('12345678'),
                'email_verified_at' => now(),
                'remember_token' => Str::random(10),
                'phone' => fake()->phoneNumber(),

            ]);
        }


        for ($i = 0; $i < 5; $i++) {
            DB::table('categories')->insert([
                'name' => $faker->domainName,
                'description' => fake()->text(),
                'creator_id' => 1,
            ]);
        }

        for ($i = 0; $i < 5; $i++) {
            DB::table('departments')->insert([
                'name' => $faker->company,
                'manager_id' => 1,
            ]);
        }

        for ($i = 0; $i < 5; $i++) {
            DB::table('products')->insert([
                'name' => $faker->name,
                "user_id" => 1,
                "category_id" => $faker->numberBetween(1, 5),
                'description' => fake()->text(),
                'price' => $faker->randomFloat(2, 1, 100),
                'image' => $faker->image,
            ]);
        }
    }
}
