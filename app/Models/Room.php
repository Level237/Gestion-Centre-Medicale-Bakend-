<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\room_type;

class Room extends Model
{
    use HasFactory;

    private $table='room';

    private $fillable=[
        'name',
        'libelle',
        'type'
    ];

    public function rommtype(){
        return $this->belongsTo(room_type::class);
    }
}
