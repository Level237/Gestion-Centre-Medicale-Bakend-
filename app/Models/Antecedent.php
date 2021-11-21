<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Patient;

class Antecedent extends Model
{
    use HasFactory;

    private $table="antecedents";

    private $fillable=[
        'description',
        'nature'
    ];

    public function patients(){
        return $this->belongsToMany(Patient::class);
    }
}
