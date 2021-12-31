<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordonance extends Model
{
    use HasFactory;

    protected $table='ordonances';

    protected $fillable=[
        'type',
        'composition'
    ];
	
	public function patients(){
        return $this->hasMany(Patient::class);
    }

    public function Personnel(){
        return $this->hasMany(Personnel::class);
    }
}
