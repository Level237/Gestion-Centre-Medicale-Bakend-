<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'personnel_id'=>rand(1,20),
			'patient_id'=>rand(1,20),
            'name'=>$this->faker->text($maxNbChar=8),
            'type'=>$this->faker->text($maxNbChar=20),
           
            'description'=>$this->faker->text($maxNbChar=10),
            'statut'=>$this->faker->randomElement($array=['libre','occupé'])
        ];
    }
}
