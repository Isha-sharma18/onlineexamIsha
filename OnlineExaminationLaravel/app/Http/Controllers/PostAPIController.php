<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;

use App\Http\Requests;
use App\Exam;
use App\Http\Resources\Exam as ExamResource;
use Validator;


class PostAPIController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function sendResponse($result, $message)
    {
    	$response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];


        return response()->json($response, 200);
    }
    public function sendError($error, $errorMessages = [], $code = 404)
    {
    	$response = [
            'success' => false,
            'message' => $error,
        ];


        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }


        return response()->json($response, $code);
    }
    public function index()
    {
        $posts = Exam::all();

        return $this->sendResponse($posts->toArray(), 'Posts retrieved successfully.');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    //    $input = $request->all();

        $exam = $request->isMethod('put') ? 
        Exam::findOrFail($request->id) : new Exam;
        $exam->SN = $request->input('SN');
        $exam->Topic = $request->input('Topic');
        $exam->Total_Question = $request->input('Total_Question');
        $exam->Marks = $request->input('Marks');
        $exam->Time_Limit = $request->input('Time_Limit');

        if($exam->save())
        {
            return new ExamResource($exam);
        }

        
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Exam::find($id);


        if (is_null($post)) {
            return $this->sendError('Post not found.');
        }


        return $this->sendResponse($post->toArray(), 'Post retrieved successfully.');
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, $id)
    // {
    //     $exam = Exam::findOrFail($id);
    //     $exam->SN = $request->input('SN');
    //     $exam->Topic = $request->input('Topic');
    //     $exam->Total_Question = $request->input('Total_Question');
    //     $exam->Marks = $request->input('Marks');
    //     $exam->Time_Limit = $request->input('Time_Limit');

    //     if($exam->save())
    //     {
    //         return new ExamResource($exam);
    //     }


        
    // }

    //for update
    public function update(Request $request, $id)
    {
    

    $input = $request->all();
    $validator = Validator::make($input, [
         'SN' => 'required',
        'Topic' => 'required',
        'Total_Question' => 'required',
        'Marks' => 'required',
        'Time_Limit' => 'required'
    ]);

    if($validator->fails()){
        return $this->sendError('Validation Error.', $validator->errors(), 422);       
    }

    $post = Exam::find($id);
    if (is_null($post)) {
        return $this->sendError('Post not found.');
    }

    $post->SN = $input['SN'];
    $post->Topic = $input['Topic'];
    $post->Total_Question = $input['Total_Question'];
    $post->Marks = $input['Marks'];
    $post->Time_Limit= $input['Time_Limit'];

    $post->save();

        return $this->sendResponse($post->toArray(), 'Post updated successfully.');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $exam = Exam::findOrFail($id);


        if (is_null($exam)) {
            return $this->sendError('Post not found.');
        }


        $exam->delete();


        return $this->sendResponse($id, 'Tag deleted successfully.');
    }
}
