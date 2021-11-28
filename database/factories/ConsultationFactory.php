<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ConsultationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'Observation'=> $this->faker->text($maxNbChars=20),
            'resultat'=>$this->faker->text($maxNbChars=200)
        ];
    }
}
