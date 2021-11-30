<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Personnel;

class Role extends Model
{
    use HasFactory;

    protected $table="roles";

    protected $fillable=[
        'id',
        'name',
        'display_name'
    ];

    public function personnel(){
        return $this->hasMany(Personnel::class);
    }
}
