<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablePersonnelAppointment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_personnel_appointment', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('personnel_id');
            $table->foreign('personnel_id')
            ->references('id')
            ->on('personnel')
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->unsignedBigInteger('appointment_id');
            $table->foreign('appointment_id')
            ->references('id')
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
        Schema::dropIfExists('table_personnel_appointment');
    }
}
