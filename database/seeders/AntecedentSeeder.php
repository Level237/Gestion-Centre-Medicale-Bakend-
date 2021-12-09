<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AntecedentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Antecedent::factory()->count(10)->create();
    }
}
