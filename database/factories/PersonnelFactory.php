<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PersonnelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nom'=>$this->faker->name(),
            'phone'=>$this->faker->phoneNumber(),
            'email'=>$this->faker->safeEmail(),
            'date_naissance'=>$this->faker->date($format='Y-m-d',$max='now'),
            'lieu_naissance'=>$this->faker->streetName(),
            'age'=>$this->faker->numberBetween($min=20,$max=42),
            'quartier'=>$this->faker->streetName(),
            'adresse'=>$this->faker->address(),
            'situation_matrimoniale'=>$this->faker->randomElement($array=['Celibataire','Marié']),
            'nombre_enfant'=>$this->faker->numberBetween($min=0,$max=10)
        ];
    }
}
