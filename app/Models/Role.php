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
        'name',
        'display_name'
    ];

    public function personnel(){
        return $this->belongsTo(Personnel::class);
    }
}
