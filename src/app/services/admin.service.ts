import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../classes/admin';
const URL="http://localhost:3000/admin"
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }
  getAdmin():Observable<Admin[]>{
    return this.http.get<Admin[]>(URL);
  }
}
