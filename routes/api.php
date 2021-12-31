<?php

use App\Http\Controllers\PatientController;
use App\Http\Controllers\PersonnelController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\ConsultationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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
Route::apiResource("/Patient",PatientController::class);
Route::apiResource("/Personnel",PersonnelController::class);
Route::get('/doctors','App\Http\Controllers\PersonnelController@listdoctors');
Route::apiResource("/room",RoomController::class);
Route::apiResource("/appointment",AppointmentController::class);
Route::apiResource("/consultation",ConsultationController::class);
Route::get('/numberOfAppointment','App\Http\Controllers\PersonnelController@getNumberOfAppointment');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
