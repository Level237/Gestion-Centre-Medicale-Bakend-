<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\{Personnel, Role, Room,room_type};
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \App\Models\Role::factory(3)->create();
        Role::factory()
        ->has(Personnel::factory()->count(10))
        ->count(3)
        ->create();
        \App\Models\Personnel::factory(10)->create();
        room_type::factory()
        ->has(Room::factory()->count(4))
        ->count(10)
        ->create();
        Room::factory()
        ->has(Personnel::factory()->count(10))
        ->count(10)
        ->create();

        \App\Models\Patient::factory(10)->create();
        \App\Models\Appointment::factory(10)->create();
        \App\Models\Consultation::factory(10)->create();
        \App\Models\Ordonance::factory(10)->create();






    }
}
