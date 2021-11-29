<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Appointment;
use App\Models\Antecedent;

class Patient extends Model
{
    use HasFactory;

    protected $table='patients';

    protected $fillable=[
        'name',
        'email',
        'sexe',
        'date_naissance',
        'age',
        'lieu_naissance',
        'groupe_sanguin',
        'rhesus',
        'ville',
        'quartier',
        'adresse',
        'number'
    ];

    public function appointments(){
        return $this->belongsToMany(Appointment::class);
    }

    public function Antecedents(){
        return $this->belongsToMany(Antecedent::class);
    }

    public function Personnel(){
        return $this->belongsToMany(Personnel::class);
    }
}
