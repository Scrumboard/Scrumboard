<?php

namespace App\Http\Controllers;

use App\Board;
use App\Lane;
use App\Task;
use Illuminate\Http\Request;

class LaneController extends Controller
{
    public function update (Board $board, Lane $lane, Request $request)
    {
        $i = 0;
        foreach ($request->tasks as $taskId)
        {
            $task = Task::find($taskId);
            $task->lane_id = $lane->id;
            $task->lane_order = $i++;
            $task->save();
        }

        return $board->lanes;
    }
}
