<?php

use Illuminate\Http\Request;
use App\Board;
use App\Lane;
use App\Task;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
  
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::apiResources([
    'users' => 'UserController',
    'boards' => 'BoardController',
    'lanes' => 'LaneController',
    'tasks' => 'TaskController'
]);
