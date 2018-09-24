import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiHitService} from '../api-hit.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { exams } from '../exams.interface';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private router:Router, private apiHit: ApiHitService) { }

  Arr : Array<{id: number, SN: number, topic : string, TotalQuestion: number, Marks: number}> = [];
  len : number;


  ngOnInit() {
  
    this.apiHit.getExam().subscribe(res => 
      { 
        console.log(res);
        this.Arr.length = 0;

        // Getting the length returned by the API
         this.len = res.data.length;

         // Copy the data from response to our local array for print
         for ( let i = 0; i < this.len; i++){ 
           this.Arr.push({
             id : res.data[i].id,
             SN : res.data[i].SN,
             topic : res.data[i].Topic,
             TotalQuestion : res.data[i].Total_Question,
             Marks : res.data[i].Marks,
         })
        }}),
       err => {
         console.log(err);
       }
  }

  // for delete
  Delete(id){
    this.apiHit.destroyExam(id).subscribe(res => 
      { 
        console.log(res);
        this.Arr.splice(id,1);
        window.location.reload();
        }),
       err => {
         console.log(err);
       }

  }


}
