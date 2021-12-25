<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Room::factory()
        ->has(\App\Models\Personnel::factory()->count(4))
        ->count(10)
        ->create();
		
		\App\Models\Room::factory()
        ->has(\App\Models\Patient::factory()->count(4))
        ->count(10)
        ->create();
    }
}
