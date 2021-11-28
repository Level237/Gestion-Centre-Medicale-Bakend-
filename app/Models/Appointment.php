<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Patient;
use App\Models\Personnel;
class Appointment extends Model
{
    use HasFactory;
    protected $table='Appointments';

    protected $fillable=[

        'type'
    ];

    public function patients(){
        return $this->belongsToMany(Patient::class);
    }

    public function Personnel(){
        return $this->belongsToMany(Personnel::class);
    }
}
