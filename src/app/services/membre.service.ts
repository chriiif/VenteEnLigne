import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membre } from '../classes/membre';
import { Observable } from 'rxjs';
const URL="http://localhost:3000/membre"
@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor(private http:HttpClient) { }
  getmembre():Observable<Membre[]>{
    return this.http.get<Membre[]>(URL);
  }
  deletemembre(id: number): Observable<Membre> {
    const deleteUrl = `${URL}/${id}`;
    return this.http.delete<Membre>(deleteUrl);
  }

  // editmembre(id: number, updatemembers: Membre): Observable<Membre> {
  //   const editUrl = `${URL}/${id}`;
  //   return this.http.put<Membre>(editUrl, updatemembers);
  // }
  updateEvent(eventId: number, eventDataToUpdate: any): Observable<any> {
    const url = `${URL}/${eventId}`; 
    console.log("eventDataToUpdate in service")
    console.log(eventDataToUpdate)
    return this.http.put(url, eventDataToUpdate);
  }
}
