<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Patient;

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
}
