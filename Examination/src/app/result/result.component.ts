import { Component, OnInit } from '@angular/core';
import { ApiHitService } from '../api-hit.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  count:number;
  constructor(private apiHitService: ApiHitService) { }

  ngOnInit() {
    this.count=this.apiHitService.getCount();
  }

}
