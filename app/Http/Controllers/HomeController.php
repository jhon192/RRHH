<?php

namespace App\Http\Controllers;

Class HomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
}