<?php

use Illuminate\Http\Request;
use App\Board;
use App\Lane;
use App\Task;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', function () {
    return App\User::all();
});

Route::any('/true', function () {
    return '';
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
  
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::get('board/{board}' , function (Board $board) {
    return $board;
});

Route::post('lane/{lane}/task', function (Lane $lane, Request $request) {
   $task = new Task; 
   $task->title = $request->title;
   $task->lane_id = $lane->id;
   $task->lane_order = count($lane->tasks);
   $task->save();

   return $task;
});

Route::put('lane/{lane}', function (Lane $lane, Request $request) {

    $i = 0;
    foreach ($request->tasks as $update)
    {
        $task = Task::find($update['id']);
        $task->lane_id = $lane->id;
        $task->lane_order = $i++;
        $task->save();
    }
});

Route::delete('task/{task}' , function (Task $task) {
    $task->delete();
});

Route::put('task/{task}' , function (Task $task, Request $request) {
    $task->title = $request->title;
    $task->save();
});
