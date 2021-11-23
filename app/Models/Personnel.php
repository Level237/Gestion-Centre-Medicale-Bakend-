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
    protected $table="personnel";
    protected $dateFormat = 'U';
    protected $casts = [
        'created_at' => 'datetime:Y-m-d',
    ];
    
    protected $fillable=[
        'nom',
        'Role_id',
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
        'created_at'
    ];
    public function getcreated(){
        return $this->created_at->format('d');
    }

    public function Role(){
        return $this->belongTo(Role::class);
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
