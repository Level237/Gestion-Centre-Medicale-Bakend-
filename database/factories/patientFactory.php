<?php

namespace Database\Factories;

use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class patientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model
     *
     * @var string
     */
    protected $model=Patient::class;


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=> $this->faker->name(),
            'email'=>$this->faker->safeEmail(),
            'sexe'=>$this->faker->randomElement($array=['M','F']),
            'date_naissance'=>$this->faker->date($format='Y-m-d',$max='now'),
            'age'=>$this->faker->randomDigitNotNull(),
            'lieu_naissance'=>$this->faker->streetName(),
            'groupe_sanguin'=>$this->faker->randomElement($array=['o','b','a','ab']),
            'rhesus'=>$this->faker->randomElement($array=['positif','negatif']),
            'ville'=>$this->faker->city(),
            'quartier'=>$this->faker->streetName(),
            'adresse'=>$this->faker->address(),
            'number'=>$this->faker->phoneNumber()
        ];
    }
}
