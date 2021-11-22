<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('room_type_id');
            $table->foreign('room_type_id')
            ->references('id')
            ->on('rooms_type')
            ->onDelete('restrict')
            ->onUpdate('restrict');
            Schema::disableForeignKeyConstraints();

            $table->unsignedBigInteger('personnel_id');
            $table->foreign('personnel_id')
            ->references('id')
            ->on('personnel')
            ->onDelete('restrict')
            ->onUpdate('restrict');
            Schema::disableForeignKeyConstraints();

            $table->string('name');
            $table->string('libellé');
            $table->text('description');
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
        Schema::dropIfExists('rooms');
    }
}
