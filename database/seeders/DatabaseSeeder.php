<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\PersonnelSeeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();



        $this->call([
            OrdonanceSeeder::class,
            AntecedentSeeder::class,
            ConsultationSeeder::class,
            AppointmentSeeder::class,
            PatientSeeder::class,
            PersonnelSeeder::class,
            RoomSeeder::class
        ]);







    }
}
