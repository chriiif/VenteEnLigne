import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gallerie } from '../classes/gallerie';
import { Observable } from 'rxjs';
const URL="http://localhost:3000/gallerie"
@Injectable({
  providedIn: 'root'
})
export class GallerieService {

  constructor(private http:HttpClient) { }
  getGallerie():Observable<Gallerie[]>{
    return this.http.get<Gallerie[]>(URL);
  }
}
