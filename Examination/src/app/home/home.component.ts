import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiHitService} from '../api-hit.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  


  // for login
  form = new FormGroup({
    email: new FormControl(),
  password: new FormControl()
  
  })

//for post
  registrationForm = new FormGroup({
    firstName: new FormControl(),
    SN:new FormControl(),
    gender: new FormControl(),
    uname: new FormControl(),
    email: new FormControl(),
  password: new FormControl()
  
  })

  constructor(private router:Router, private apiHit: ApiHitService ) { }
  
  

  

  ngOnInit() {
    
  }


  //for log in
 startQuiz(){
  // this.apiHit.setData(this.form)
  this.router.navigate(['/login']);
 }
 OnSubmit(){
  // localStorage.setItem('key',JSON.stringify(this.form.value))
  console.log(this.form.value);
  this.apiHit.setData(this.form.value)
    .subscribe(res=>{console.log(res)
    this.apiHit.token =res.access_token
    this.router.navigate(['quiz'])
  
    });
    //  this.apiHit.setData().subscribe(res => 
    // { 
    //   console.log(res);

    //     }),
    // err => {
    //   console.log(err);
    // };
 }



 //for post
 OnRegistration(){
   console.log(this.registrationForm.value)
   this.apiHit.register(this.registrationForm.value).subscribe(
     res=>{
       console.log(res);
     }
   );
   this.router.navigate(['/view']);
 }
}
