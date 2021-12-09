<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Patient;

class Antecedent extends Model
{
    use HasFactory;

    protected $table="antecedents";

    protected $fillable=[
        'description',
        'nature'
    ];

    public function patients(){
        return $this->belongsToMany(Patient::class);
    }
}
