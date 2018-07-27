<?php

namespace App\Http\Controllers;

use App\Board;
use App\Lane;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    function create (Board $board, Lane $lane, Request $request)
    {
        $task = new Task;
        $task->title = $request->title;
        $task->lane_id = $lane->id;
        $task->lane_order = 999;
        $task->save();
        
        return [ 'task' => $task, 'lanes' => $board->lanes ];
    }

    function delete (Board $board, Lane $lane, Task $task)
    {
        $task->delete();
        
        return $board->lanes;
    }

    function update (Task $task, Request $request)
    {
        $task->title = $request->title;
        $task->save();
        
        return $task;
    }
}
