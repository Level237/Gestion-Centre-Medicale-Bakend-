<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nurse extends Model
{
    use HasFactory;

    private $table="nurses";

    private $fillable=[
        'name',
        'email',
        'address',
        'type'
    ];
}
