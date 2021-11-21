<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Role;

class Personnel extends Model
{
    use HasFactory;
    private $table="personnel";
    private $fillable=[
        'nom',
        'phone',
        'email',
        'date_naissance',
        'lieu_naissance',
        'age',
        'quartier',
        'adresse',
        'adresse',
        'situation_matrimoniale',
        'nombre_enfant'
    ];

    public function Role(){
        return $this->belongTo(Role::class);
    }
}
