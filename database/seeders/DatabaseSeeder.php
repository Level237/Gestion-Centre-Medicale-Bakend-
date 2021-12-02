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
        $this->call([
            PersonnelSeeder::class
        ]);






    }
}
