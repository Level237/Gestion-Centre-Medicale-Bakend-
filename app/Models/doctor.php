<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class doctor extends Model
{
    use HasFactory;
    private $table="Doctor";
    private $fillable=[
        'name',
        'email',
        'address'
    ];
}