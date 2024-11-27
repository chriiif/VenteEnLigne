import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendeur } from '../classes/vendeur';
import { Observable } from 'rxjs';
const URL="http://localhost:3000/vendeur"
@Injectable({
  providedIn: 'root'
})
export class VendeurService {

  constructor(private http:HttpClient) { }
  getvendeur():Observable<Vendeur[]>{
    return this.http.get<Vendeur[]>(URL);

}
}
