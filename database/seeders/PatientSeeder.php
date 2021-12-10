<?php

namespace Database\Seeders;

use Faker\Core\Number;
use Illuminate\Database\Seeder;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Patient::factory()->count(20)->create();

         //Relationship between the patients table and the Antecedent table

         $ids=range(1,10);

         \App\Models\Patient::factory()->count(10)->create()->each(function ($patients)use ($ids){
             shuffle($ids);
             $patients->Antecedents()->attach(array_slice($ids,0,rand(1,4)));
         });

         //Relationship between the patients table and the Appointment table

         $ids=range(1,10);

         \App\Models\Patient::factory()->count(10)->create()->each(function ($patients)use ($ids){
             shuffle($ids);
             $patients->appointments()->attach(array_slice($ids,0,rand(1,4)));
         });
    }
}
