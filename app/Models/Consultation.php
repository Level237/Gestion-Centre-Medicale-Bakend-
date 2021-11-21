<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Personnel;
class Consultation extends Model
{
    use HasFactory;
    private $table="Consultation";

    private $fillable=[
    'Observation',
    'resultat'
    ];

    public function personnels(){
        return $this->belongsToMany(Personnel::class);
    }
}
