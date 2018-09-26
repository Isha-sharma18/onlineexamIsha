import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
id : string;

  constructor() { }

  setID (id)
  {
    this.id = id;
  }

  getID ()
  {
    return this.id;
  }
}
