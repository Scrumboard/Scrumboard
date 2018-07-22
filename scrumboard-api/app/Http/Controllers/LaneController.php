<?php

namespace App\Http\Controllers;

use App\Board;
use App\Lane;
use App\Task;
use Illuminate\Http\Request;

class LaneController extends Controller
{
    function update (Board $board, Lane $lane, Request $request)
    {
        $tasks = $request->tasks;

        for ($i = 0; $i < count($tasks); $i++)
        {
            $task = Task::find($tasks[$i]);
            $task->lane_id = $lane->id;
            $task->lane_order = $i;
            $task->save();
        }

        return Board::find(1);
    }
}
