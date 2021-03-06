<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
			$table->string('lastname');
            $table->string('email')->unique();
            $table->enum('sexe',['M','F']);
            $table->date('date_naissance');
            $table->string('lieu_naissance');
            $table->enum('groupe_sanguin', ['O','A','AB','B']);
            $table->string('rhesus');
            $table->string('ville');
            $table->string('quartier');
            $table->string('adresse');
            $table->string('number');
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
        Schema::dropIfExists('patients');
    }
}
