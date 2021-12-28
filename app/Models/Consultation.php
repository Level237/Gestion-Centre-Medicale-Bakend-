<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Personnel;
class Consultation extends Model
{
    use HasFactory;
    protected $table="consultations";

    protected $fillable=[
	 'patient_id',
	'personnel_id',
    'Observation',
    'resultat'
    ];

     public function patients(){
        return $this->hasMany(Patient::class);
    }

    public function Personnel(){
        return $this->hasMany(Personnel::class);
    }
}
