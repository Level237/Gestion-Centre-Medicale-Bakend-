<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Room;

class room_type extends Model
{
    use HasFactory;
    private $table='room_type';
    private $fillable=[
        'id',
        'type'
    ];

    public function rooms(){
        return $this->hasMany(Room::class);
    }
}
