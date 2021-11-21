<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Appointment;

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

    public function appointments(){
        return $this->belongsToMany(Appointment::class);
    }
}
