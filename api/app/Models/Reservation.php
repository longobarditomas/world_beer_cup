<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $table    = 'reservations';
    protected $fillable = ['id', 'userID', 'party', 'requeriments', 'date', 'created_at', 'updated_at'];

}
