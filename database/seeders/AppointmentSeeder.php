<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Personnel;
use App\Models\Patient;
use App\Models\Appointment;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
		
		Personnel::factory()
        ->has(Appointment::factory()->count(4))
        ->count(30)
        ->create();
		
		Patient::factory()
        ->has(Appointment::factory()->count(4))
        ->count(30)
        ->create();
		 \App\Models\Appointment::factory()->count(10)->create();
		
    }
}
