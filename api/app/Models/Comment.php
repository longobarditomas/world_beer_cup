<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $table    = 'comments';
    protected $fillable = ['id', 'rating', 'comment', 'userID', 'beerID', 'created_at', 'updated_at'];

    public function user() {
        return $this->belongsTo('App\Models\User', 'userID', 'id');
    }

    public function beer() {
        return $this->belongsTo('App\Models\Beer', 'beerID', 'id');
    }

}
