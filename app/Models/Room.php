<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    private $table='room';

    private $fillable=[
        'name',
        'libelle',
        'type'
    ];
}
