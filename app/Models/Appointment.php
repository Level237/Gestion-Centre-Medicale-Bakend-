<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Patient;
use App\Models\Personnel;
class Appointment extends Model
{
    use HasFactory;
    private $table='Appointments';

    private $fillable=[
        'enum'
    ];

    public function patients(){
        return $this->belongsToMany(Patient::class);
    }

    public function Personnel(){
        return $this->belongsToMany(Personnel::class);
    }
}
