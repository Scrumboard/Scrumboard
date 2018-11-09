<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    public function index()
    {
        //
    }
    
    public function store(Request $request)
    {
        $task = new Task($request->all());
        $task->save();
    }
    
    public function show(Task $task)
    {
        //
    }
    
    public function update(Request $request, Task $task)
    {
        $task->title = $request->title;
        $task->save();
    }
    
    public function destroy(Task $task)
    {
        $task->delete();
    }
}
