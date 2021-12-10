<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class OrdonanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Ordonance::factory()->count(10)->create();
    }
}
