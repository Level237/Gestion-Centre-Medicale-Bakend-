<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordonance extends Model
{
    use HasFactory;

    private $table='Ordonance';

    private $fillable=[
        'name',
        'composition'
    ];
}
