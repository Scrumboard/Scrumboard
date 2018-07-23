<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    function create (Request $request)
    {
        $task = new Task($request->all());
        $task->save();
        
        return $task;
    }

    function update (Task $task, Request $request)
    {
        $task->title = $request->title;
        $task->save();
        
        return $task;
    }
    
    function updateMultiple (Request $request)
    {
        foreach ($request->tasks as $update)
        {
            $task = Task::find($update['id']);
            $task->lane_id = $update['lane_id'];
            $task->lane_order = $update['lane_order'];
            $task->save();
        }
    }

    function delete (Task $task)
    {
        $task->delete();
    }
}
