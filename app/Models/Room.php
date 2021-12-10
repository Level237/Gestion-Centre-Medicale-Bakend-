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
        'personnel_id',
        'name',
        'type',
        'libelle',

    ];


    public function personnel(){
        return $this->belongsTo(Personnel::class);
    }
}
