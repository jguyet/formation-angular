import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Card } from '../models/card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

   private endpoint: String = environment.formationApi;

  constructor(private httpClient: HttpClient) {

  }

  public getCards(): Observable<Card[]> {
      return this.httpClient.get<Card[]>(`${environment.formationApi}/search_query`); 
  }

  public createCard(title: String, description: String, price: Number, type: String): Observable<Card> {
      return this.httpClient.post<Card>(`${this.endpoint}/card`,
        new Card(title, description, price, type));
  }
}
