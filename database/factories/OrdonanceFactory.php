<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrdonanceFactory extends Factory
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
            'type'=>$this->faker->text($maNbChars=20),
            'composition'=>$this->faker->text($maxNbChars=100)
        ];
    }
}
