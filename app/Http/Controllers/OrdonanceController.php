<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ordonance;
use DB;

class OrdonanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ordonance= DB::table('ordonances')
		->join('patients','patients.id','=','ordonances.patient_id')
		->join('personnels','personnels.id','=','ordonances.personnel_id')
		->select('ordonances.id as id','ordonances.type as type','ordonances.composition as composition','patients.name as  patient_name','patients.id as patient_id','personnels.nom as personnel_name','personnels.specialisation','personnels.id as personnel_id')
		->get();
		return $ordonance;
      
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
