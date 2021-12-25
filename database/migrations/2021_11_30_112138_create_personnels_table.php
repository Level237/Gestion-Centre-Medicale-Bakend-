<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonnelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personnels', function (Blueprint $table) {
            $table->id(); 
			$table->string('nom');
			$table->string('prenom');
            $table->string('phone');
            $table->string('email');
            $table->date('date_naissance');
            $table->string('lieu_naissance');
            $table->integer('age');
            $table->string('quartier');
            $table->string('adresse');
			$table->string('role');
			$table->string('specialisation');
            $table->string('situation_matrimoniale');
            $table->integer('nombre_enfant');
            $table->string('statut');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personnels');
    }
}
