<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;
use DB;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $appointments= DB::table('appointments')
		->join('patients','patients.id','=','appointments.patient_id')
		->join('personnels','personnels.id','=','appointments.personnel_id')
		->select('appointments.id as id','appointments.type as type','patients.name as  patient_name','patients.id as patient_id','personnels.nom as personnel_name','personnels.specialisation','personnels.id as personnel_id')
		->get();
		
        return $appointments;

    }
	public function getNumberOfDayAppointment(){
		return Appointment::all()->where('created_at','>',now()->subDay(0))->count();
		
	}
	public function getNumberOfAppointment(){
		
		 return Appointment::all()->count();
	}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
