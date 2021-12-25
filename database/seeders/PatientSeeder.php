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
       

        

        
		 
		  //Relationship between the patient table and the rooms table

        $ids=range(1,10);

        \App\Models\Personnel::factory()->count(10)->create()->each(function ($patient)use ($ids){
            shuffle($ids);
            $patient->Rooms()->attach(array_slice($ids,0,rand(1,4)));
        });
    }
}
