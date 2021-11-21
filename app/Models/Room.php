<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\room_type;
use App\Models\Personnel;

class Room extends Model
{
    use HasFactory;

    private $table='room';

    private $fillable=[
        'name',
        'libelle',
        'room_id',
        'personnel_id'
    ];

    public function rommtype(){
        return $this->belongsTo(room_type::class);
    }
    public function personnel(){
        return $this->belongsTo(Personnel::class);
    }
}
