<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AntecedentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nature'=>$this->faker->text($maxchar=10),
            'description'=>$this->faker->text($maxchar=20)
        ];
    }
}
