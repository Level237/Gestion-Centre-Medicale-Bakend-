<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

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
        \App\Models\Role::create(
            [
                'id' => '1',
                'name' => 'docteur',
                'display_name' =>'Docteur'
            ]
        );

        \App\Models\Role::create(
            [
                'id' => '2',
                'name' => 'admin',
                'display_name' =>'Administrateur' 
            ]
        );

        \App\Models\Role::create(
            [
                'id' => '3',
                'name' => 'infimiere',
                'display_name' =>'Infimiere' 
            ]
        );

        

        
    }
}
