<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    protected $fillable = [
        'SN', 'Topic' , 'Total_Question' , 'Marks' , 'Time_Limit'
    ];
}
