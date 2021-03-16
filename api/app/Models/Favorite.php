<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    protected $table    = 'favorites';
    protected $fillable = ['id', 'userID', 'beerID', 'created_at', 'updated_at'];

    public function user() {
        return $this->belongsTo('App\Models\User', 'userID', 'id');
    }

    public function beer() {
        return $this->belongsTo('App\Models\Beer', 'beerID', 'id');
    }

}
