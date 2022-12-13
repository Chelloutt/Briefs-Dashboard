<?php

namespace App\Http\Controllers;
use App\Models\tasks;
use Illuminate\Http\Request;

class TasksController extends Controller
{
        public function store(Request $request){
        $index = new tasks;
        $index->todo = $request->todo;
        $index->save();
        return response()->json($index);
    }
}
