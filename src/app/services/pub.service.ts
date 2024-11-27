import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  private readonly apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private readonly defaultQuery = 'programming';
  private readonly defaultMaxResults = '5';

  constructor(private http: HttpClient) { }

  getBooks(query: string = this.defaultQuery, maxResults: string = this.defaultMaxResults): Observable<any> {
    const url = `${this.apiUrl}?q=${query}&maxResults=${maxResults}`;
    return this.http.get(url);
  }
}
