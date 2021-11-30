<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Personnel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personnel', function (Blueprint $table) {
            $table->id();

            Schema::disableForeignKeyConstraints();
            $table->unsignedBigInteger('Role_id');
            $table->foreign('Role_id')
            ->references('id')
            ->on('Roles')
            ->onDelete('restrict')
            ->onUpdate('restrict');

            $table->string('nom');
            $table->string('phone');
            $table->string('email');
            $table->date('date_naissance');
            $table->string('lieu_naissance');
            $table->integer('age');
            $table->string('quartier');
            $table->string('adresse');
            $table->string('situation_matrimoniale');
            $table->integer('nombre_enfant');
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
        //
    }
}
