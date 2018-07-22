<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    protected $appends = ['lanes', 'tasks'];

    public function lanes()
    {
        return $this->hasMany('App\Lane');
    }

    public function tasks()
    {
        return $this->hasManyThrough('App\Task', 'App\Lane')->orderBy('lane_order');
    }

    public function getLanesAttribute()
    {
        return $this->lanes()->get();
    }

    public function getTasksAttribute()
    {
        return $this->tasks()->get();
    }
}
