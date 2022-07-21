<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\SpaceModel;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::post('/auth', function (Request $request) {
  $credentials = $request->validate([
    'email' => ['required', 'email'],
    'password' => ['required'],
  ]);

  if ($user = Auth::attempt($credentials)) {
    $token = $request->user()->createToken('api', ['server:update']);
    SpaceModel::create(["name" => "first"]);
    return ["user" => $user, 'token' => $token->plainTextToken];
  }

  $user = User::create(["name" => "first", "password" => Hash::make($credentials['password']), "email" => $credentials['email']]);

  return ["error" => Auth::attempt($credentials), "newuser" => $user];
});

Route::post('/signout', function (Request $request) {
  return $request->user();
});
