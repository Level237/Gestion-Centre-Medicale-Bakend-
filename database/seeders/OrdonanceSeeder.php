<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Personnel;
use App\Models\Patient;
use App\Models\Antecedent;

class OrdonanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		
		Personnel::factory()
        ->has(Antecedent::factory()->count(4))
        ->count(30)
        ->create();
		
		Patient::factory()
        ->has(Antecedent::factory()->count(4))
        ->count(30)
        ->create();
		
        \App\Models\Ordonance::factory()->count(10)->create();
    }
}
