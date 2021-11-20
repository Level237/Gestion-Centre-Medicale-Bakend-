<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    private $table='patients';

    private $fillable=[
        'name',
        'email',
        'sexe',
        'adress',
        'phone'
    ];
}
