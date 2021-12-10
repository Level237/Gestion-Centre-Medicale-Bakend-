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
        'Role_id',
        'nom',
        'phone',
        'email',
        'date_naissance',
        'lieu_naissance',
        'age',
        'quartier',
        'adresse',
        'adresse',
        'situation_matrimoniale',
        'nombre_enfant',
        'statut'
    ];

    public function Role(){
        return $this->hasMany(Role::class);
    }
    public function Rooms(){
        return $this->hasMany(Room::class);
    }

    public function Consultations(){
        return $this->belongsToMany(Consultation::class);
    }

    public function Appointment(){
        return $this->belongsToMany(Appointment::class);
    }

    public function Patients(){
        return $this->belongsToMany(Patient::class);
    }

}



