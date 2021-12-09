<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ConsultationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Consultation::factory()->count(10)->create();
    }
}
