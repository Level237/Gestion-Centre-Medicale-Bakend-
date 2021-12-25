<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Role;
use App\Models\Room;
use App\Models\Appointment;
use App\Models\patient;

class Personnel extends Model
{
    use HasFactory;
    protected $table="personnels";
    protected $fillable=[
        'nom',
        'phone',
        'email',
        'date_naissance',
        'lieu_naissance',
        'age',
        'quartier',
        'adresse',
        'role',
		'specialisation',
        'situation_matrimoniale',
        'nombre_enfant',
        'statut'
    ];

   
    public function Rooms(){
        return $this->belongsToMany(Room::class);
    }

    public function Consultations(){
        return $this->belongsToMany(Consultation::class);
    }

    public function Appointment(){
        return $this->belongsTo(Appointment::class);
    }

    public function Patients(){
        return $this->belongsToMany(Patient::class);
    }

}



