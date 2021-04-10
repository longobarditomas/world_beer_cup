<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller {

    public function index(Request $request) {
        return response()->json(Comment::with('beer', 'user')->orderBy('created_at', 'desc')->get());
    }

    public function create(Request $request) {
        $comment = Comment::create([
            'rating'     => $request->input('rating'),
            'comment'    => $request->input('comment'),
            'userID'     => $request->user()->id,
            'beerID'     => $request->input('beerId'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        return response()->json(Comment::with('beer', 'user')->where('id', $comment->id)->get());
    }

}
