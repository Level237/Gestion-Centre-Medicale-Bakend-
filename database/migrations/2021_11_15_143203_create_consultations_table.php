<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultations', function (Blueprint $table) {
            $table->id();
			Schema::disableForeignKeyConstraints();
			
			 $table->unsignedBigInteger('personnel_id');
        $table->foreign('personnel_id')
            ->references('id')
            ->on('personnels')
            ->onDelete('restrict')
            ->onUpdate('restrict');
			
			 $table->unsignedBigInteger('patient_id');
        $table->foreign('patient_id')
            ->references('id')
            ->on('patients')
            ->onDelete('restrict')
            ->onUpdate('restrict');
			
            $table->string('Observation');
            $table->text('resultat');
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
        Schema::dropIfExists('consultations');
    }
}
