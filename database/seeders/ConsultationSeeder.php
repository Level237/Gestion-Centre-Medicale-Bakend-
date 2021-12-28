<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Personnel;
use App\Models\Patient;
use App\Models\Consultation;

class ConsultationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		Personnel::factory()
        ->has(Consultation::factory()->count(4))
        ->count(30)
        ->create();
		
		Patient::factory()
        ->has(Consultation::factory()->count(4))
        ->count(30)
        ->create();
		
        \App\Models\Consultation::factory()->count(10)->create();
    }
}
