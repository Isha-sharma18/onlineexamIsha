import { Component, OnInit } from '@angular/core';
import { ApiHitService } from '../api-hit.service';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { Data } from '../data';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data: any; 
  id : string;
  SN : string;
  Arr : Array<{id: string, SN : string, topic : string, TotalQuestion: number, Marks: number,
    Time_Limit : string}> = [];
  updateData : any;
  constructor(private http:HttpClient ,private apiHit: ApiHitService,
    private router: Router,private route: ActivatedRoute, private ds : DataService) { }

  ngOnInit() {
    this.id = this.ds.getID();
   
      this.apiHit.getExamById(this.id).subscribe(res => 
        { 
          console.log(res);
          this.SN = res.data.SN;
          this.updateForm.get('topic').patchValue(res.data.id);
          this.updateForm.get('questions').patchValue(res.data.Total_Question);
          this.updateForm.get('marks').patchValue(res.data.Marks);
          this.updateForm.get('time').patchValue(res.data.Time_Limit);
          this.Arr.push({
            id : res.data.id,
            SN : res.data.SN,
            topic : res.data.Topic,
            TotalQuestion : res.data.Total_Question,
            Marks : res.data.Marks,
            Time_Limit : res.data.Time_Limit,
        })
       }),
      err => {
        console.log(err);
      }
             
  }
    

  updateForm = new FormGroup ({
    topic: new FormControl(),
    questions: new FormControl(),
    marks: new FormControl(),
    time: new FormControl(),
  });

  OnUpdate(id, SN) {
    this.updateData = {
      id : id,
      SN : SN,
      topic : this.updateForm.value.topic,
      TotalQuestion : this.updateForm.value.questions,
      Marks : this.updateForm.value.marks,
      Time_Limit : this.updateForm.value.time,
  }
  this.apiHit.updateExam(this.updateData, id).subscribe(res => 
    { 
      alert('Data has been updated successfully');
      this.router.navigate(['/exam'])
   }),
  err => {
    console.log(err);
  }
  
}

}