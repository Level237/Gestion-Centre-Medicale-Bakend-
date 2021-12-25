<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\room_type;
use App\Models\Personnel;

class Room extends Model
{
    use HasFactory;

    protected $table='rooms';

    protected $fillable=[
        'name',
        'type',
        'libelle',
        'description',
        'statut'

    ];


    public function personnel(){
        return $this->belongsToMany(Personnel::class);
    }
	
	public function patient(){
	   
	   return $this->belongsToMany(Patient::class);
	}
}
