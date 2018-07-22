<?php

namespace App\Http\Controllers;

use App\Board;
use App\Lane;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    function create (Board $board, Lane $lane)
    {
        $task = new Task;
        $task->title = 'hello world';
        $task->lane_id = $lane->id;
        $task->lane_order = 9999;
        $task->save();
        $task->title = '#' . $task->id;
        $task->save();

        return Board::find(1);
    }

    function delete (Board $board, Task $task)
    {
        $task->delete();
        
        return Board::find(1);
    }
}
