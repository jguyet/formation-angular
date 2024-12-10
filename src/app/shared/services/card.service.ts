import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(public httpClient: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>('http://angular19.duckdns.org:8080/search_query');
  }
}
