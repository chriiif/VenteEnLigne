import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../classes/evenement';
import { Observable } from 'rxjs';
const URL="http://localhost:3000/events"
@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  evenements: Evenement[]=[];
  constructor(private http:HttpClient) { }
  getevent():Observable<Evenement[]>{
    return this.http.get<Evenement[]>(URL);
  }
  
  addEvent(newEvent: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(URL, newEvent);
  }

  deleteEvent(id: number): Observable<Evenement> {
    const deleteUrl = `${URL}/${id}`;
    return this.http.delete<Evenement>(deleteUrl);
  }

  updateEvent(eventId: number, eventDataToUpdate: any): Observable<any> {
    const url = `${URL}/${eventId}`; 
    console.log("eventDataToUpdate in service")
    console.log(eventDataToUpdate)
    return this.http.put(url, eventDataToUpdate);
  }
}
