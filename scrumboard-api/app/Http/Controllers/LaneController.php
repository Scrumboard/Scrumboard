<?php

namespace App\Http\Controllers;

use App\Lane;
use App\Task;
use Illuminate\Http\Request;

class LaneController extends Controller
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
        //
    }
    
    public function show(Lane $lane)
    {
        //
    }
    
    public function update(Request $request, Lane $lane)
    {
        $i = 0;
        foreach ($request->tasks as $update)
        {
            $task = Task::find($update['id']);
            $task->lane_id = $lane->id;
            $task->lane_order = $i++;
            $task->save();
        }
    }
    
    public function destroy(Lane $lane)
    {
        //
    }
}
