import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';
import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHitService {
  count: number;
  data = new Data();
  token:string
  httpOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization':'bearer'+this.token    })
  }

  // data={
  //   "email":"aditee",
  //   "password" : "aditee"
  // }


  constructor(private http: HttpClient) {
    this.data.email = JSON.parse(localStorage.getItem("email"));
    this.data.password= JSON.parse(localStorage.getItem("password"));
  }


  //for log in
  setData(loginObj): Observable<any> {
    // let userData = {
    //   email: this.data.email,
    //   password: this.data.password
    // }

    return this.http.post<any>('http://localhost:8000/api/auth/login', loginObj, this.httpOpt);
  }



  //for getting data
  getExam(): Observable<any> {
    return this.http.get('http://localhost:8000/exams', this.httpOpt);
  }



  //for deleting data
  destroyExam(id): Observable<any> {
    return this.http.delete('http://localhost:8000/exams/' + id, this.httpOpt);
  }

  register(data) {
    // var header=new HttpHeaders({
    //   'content-type':'application/json',
    //   'accept':'application/json'
    // })
    // var requestOptions=new RequestOptions()
    console.log(data);
    return this.http.post('http://localhost:8000/exams',data, this.httpOpt);
  }

  getCount(){
    return this.count;
  }

  setCount(count:number){
    this.count=count;
  }

//for getting 
  getRoomsById(id){
    return this.http.get('http://localhost:8000/exams/' + id, this.httpOpt);
  }

  //for updating data
  updateExam(Arr, id): Observable<any> {
    let body = {
      SN : Arr.SN,
      Topic : Arr.topic,
      Total_Question : Arr.TotalQuestion,
      Marks : Arr.Marks,
      Time_Limit : Arr.Time_Limit
    }
    return this.http.put('http://localhost:8000/exams/'+ id, body, this.httpOpt);
  }

  //for getting exam by ID
  getExamById(id): Observable<any> {
    return this.http.get('http://localhost:8000/exams/' + id, this.httpOpt);
  }

}





// setItem(input)
//   {console.log(input);
//     var body=JSON.stringify(input);
//     var headerOptions=new Headers( {'Content-Type' : 'application/json'});
//     var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
//     return this.http.post('http://localhost:8000/api/auth/login', body, requestOptions);
//   }



// import { Injectable } from '@angular/core';
// import { Http, RequestOptions, RequestMethod, Headers } from '@angular/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {

//   constructor(private http:Http) { }
//   setItem(input)
//   {console.log(input);
//     var body=JSON.stringify(input);
//     var headerOptions=new Headers( {'Content-Type' : 'application/json'});
//     var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
//     return this.http.post('http://localhost:8000/api/auth/login', body, requestOptions);
//   }
// }