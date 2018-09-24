import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { ApiHitService } from '../api-hit.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, private apiHitService: ApiHitService) { }

  form = new FormGroup({
    q1: new FormControl(),
    q2: new FormControl(),
    q3: new FormControl(),
    q4: new FormControl(),
    q5: new FormControl(),
    q6: new FormControl()

  })

  count = 0

  correctAnswer = () => {
    if (this.form.value.q1 == "a") {
      this.count += 1;
    }
    if (this.form.value.q2 == "a") {
      this.count += 1;
    }
    if (this.form.value.q3== "c") {
      this.count += 1;
    }
    if (this.form.value.q4 == "c") {
      this.count += 1;
    }
    if (this.form.value.q5 == "a") {
      this.count += 1;
    }
    if (this.form.value.q6 == "d") {
      this.count += 1;
    }
  }

  ngOnInit() {
  }

  submit() {
    this.correctAnswer()
    this.apiHitService.setCount(this.count);
    this.router.navigate(['/result']);

  }
}
