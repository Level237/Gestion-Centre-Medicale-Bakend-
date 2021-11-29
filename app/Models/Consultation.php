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
    'Observation',
    'resultat'
    ];

    public function personnels(){
        return $this->belongsToMany(Personnel::class);
    }
}
