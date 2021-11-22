<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonnelConsultationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personnel_consultation', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('personnel_id');
            $table->foreign('personnel_id')
            ->references('id')
            ->on('personnel')
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->unsignedBigInteger('consultation_id');
            $table->foreign('consultation_id')
            ->references('id')
            ->on('consultation')
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
        Schema::dropIfExists('personnel_consultation');
    }
}
