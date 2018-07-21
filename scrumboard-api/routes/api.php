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

Route::group(['prefix' => 'board'], function () {
    Route::get('', function () {
        return Board::find(1);
    });
    Route::get('lane/{lane}/create', function (Lane $lane, Request $request) {
        
        $task = new Task;
        $task->title = 'hello world';
        $task->lane_id = $lane->id;
        $task->lane_order = 9999;
        $task->save();
        $task->title = '#' . $task->id;
        $task->save();

        return Board::find(1);
    });
    Route::post('lane/{lane}', function (Lane $lane, Request $request) {
        
        for ($i = 0; $i < count($request->tasks); $i++) {
            $task = Task::find($request->tasks[$i]);

            $task->lane_id = $lane->id;
            $task->lane_order = $i;
            $task->save();
        }

        return Board::find(1);
    });
    Route::delete('task/{task}', function (Task $task) {
        $task->delete();
        return Board::find(1);
    });
});
