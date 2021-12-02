<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Personnel;
class PersonnelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $personnel=\App\Models\Personnel::factory(10)->create();

        $personnel->each(function($personnel){

            \App\Models\Role::factory(2)->create([
                'personnel_id'=>$personnel->id
            ]);
        });
    }
}
