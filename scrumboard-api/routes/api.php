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

Route::group(['prefix' => 'tasks'], function () {
    Route::post('', 'TaskController@create');
    Route::put('{task}', 'TaskController@update');
    Route::put('', 'TaskController@updateMultiple');
    Route::delete('{task}', 'TaskController@delete');
});

Route::group(['prefix' => 'board'], function () {
    Route::get('{board}', 'BoardController@find');
});
