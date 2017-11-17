import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

const BASE_URL = 'http://localhost:3000/blogs/';
const header = {headers: new Headers({'Content-Type':'application/json'})}

@Injectable()
export class BlogService {


  constructor(private http : Http) {
  }

  getData(){
    return this.http.get(BASE_URL).map(res => res.json());
  }

  postData(data){
    return this.http.post(BASE_URL,data,header)
      .map(res=>res.json())
  }
  DeleteData(id){
    return this.http.delete(`${BASE_URL}${id}`)
      .map(res=>res.json())
  }

  updateData(id,data){
    console.log("pahuch gye");
    console.log(data);
    return this.http.patch(`${BASE_URL}${id}`,data,header)
      .map(res=>res.json());
  }
}
