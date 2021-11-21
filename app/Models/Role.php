<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Personnel;

class Role extends Model
{
    use HasFactory;

    private $table="roles";

    private $fillable=[
        'id',
        'name',
        'display_name'
    ];

    public function personnal(){
        return $this->hasMany(Personnel::class);
    }
}
