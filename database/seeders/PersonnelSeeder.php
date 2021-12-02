<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PersonnelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Personnel::factory(10)->create();
    }
}
