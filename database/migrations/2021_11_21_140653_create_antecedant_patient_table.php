<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAntecedantPatientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('antecedant_patient', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('antecedent_id');
            $table->foreign('antecedent_id')
            ->references('id')
            ->on('antecedents')
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->unsignedBigInteger('patient_id');
            $table->foreign('patient_id')
            ->references('id')
            ->on('patients')
            ->onDelete('cascade')
            ->onUpdate('cascade');

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
        Schema::dropIfExists('antecedant_patient');
    }
}
