<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lane extends Model
{
    protected $appends = ['tasks'];

    public function tasks()
    {
        return $this->hasMany('App\Task')->orderBy('lane_order');
    }

    public function getTasksAttribute()
    {
        return $this->tasks()->get();
    }
}
