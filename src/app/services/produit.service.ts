import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../classes/produit';
import { Observable } from 'rxjs';
const URL="http://localhost:3000/produit"
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  getproduit():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
  }
}
