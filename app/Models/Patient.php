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
		'lastname',
        'email',
        'sexe',
        'date_naissance',
        'lieu_naissance',
        'groupe_sanguin',
        'rhesus',
        'ville',
        'quartier',
        'adresse',
        'number'
    ];

    public function appointments(){
        return $this->belongsTo(Appointment::class);
    }

    public function Antecedents(){
        return $this->belongsToMany(Antecedent::class);
    }

    public function Personnel(){
        return $this->belongsTo(Personnel::class);
    }
	public function Rooms(){
		return $this->belongsToMany(Patient::class);
	}
	public function Consultation(){
        return $this->belongsTo(Consultation::class);
    }
}