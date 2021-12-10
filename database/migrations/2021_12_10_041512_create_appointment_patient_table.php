<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentPatientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointment_patient', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('Appointment_id');
            $table->foreign('Appointment_id')
            ->references('id')
            ->on('appointments')
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
        Schema::dropIfExists('appointment_patient');
    }
}
