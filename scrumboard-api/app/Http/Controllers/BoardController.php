<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    function find (Board $board)
    {
        return $board;
    }

    public function getAll()
    {
        return Board::all();
    }
}
