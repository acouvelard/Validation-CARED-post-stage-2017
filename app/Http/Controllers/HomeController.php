<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
  public function index()
      {
          return view('home');
      }
  public function recipe()
      {
          return view('recipe');
      }
  public function projet()
      {
          return view('projet');
      }
}
