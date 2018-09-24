import { Component, OnInit } from '@angular/core';
import { ApiHitService } from '../api-hit.service';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { Data } from '../data';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data: any; 
 
  constructor(private http:HttpClient ,private dataService: ApiHitService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRoomById();
    
  }
  getRoomById(){
   
    this.route.params.subscribe(params => {
      this.dataService.getRoomsById(params['id']).subscribe(res => {
        this.data = res;
        console.log("room"+JSON.stringify(this.data));
    });
  });
           
}


  //   updateRoom(type,description,price) {
  //     this.route.params.subscribe(params => {
  //     this.dataService.updateRoom(type,description, price, params['id']);
  //     this.router.navigate(['home']);
  //   });
  // }
  

}
