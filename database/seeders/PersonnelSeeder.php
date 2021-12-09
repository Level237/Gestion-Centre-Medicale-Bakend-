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

        // $ids = range(1, 10);

        // \App\Models\Personnel::factory()->count(40)->create()->each(function ($personnel) use ($ids){
        //    shuffle($ids);
          //  $personnel->Role()->attach(array_slice($ids,0,rand(1,4)));
       // });

        \App\Models\Role::factory()
        ->has(\App\Models\Personnel::factory()->count(4))
        ->count(10)
        ->create();
        \App\Models\Personnel::factory()->count(10)->create();

        //Relationship between the personal table and the patient table

        $ids=range(1,10);

        \App\Models\Personnel::factory()->count(10)->create()->each(function ($personnel)use ($ids){
            shuffle($ids);
            $personnel->Patients()->attach(array_slice($ids,0,rand(1,4)));
        });

        //Relationship between the personal table and the Appointment table

        $ids=range(1,10);

        \App\Models\Personnel::factory()->count(10)->create()->each(function ($personnel)use ($ids){
            shuffle($ids);
            $personnel->Appointment()->attach(array_slice($ids,0,rand(1,4)));
        });

        //Relationship between the personal table and the Consultation table

        $ids=range(1,10);

        \App\Models\Personnel::factory()->count(10)->create()->each(function ($personnel)use ($ids){
            shuffle($ids);
            $personnel->Consultations()->attach(array_slice($ids,0,rand(1,4)));
        });
    }
}
