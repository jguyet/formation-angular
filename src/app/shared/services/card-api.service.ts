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
      return this.httpClient.get<Card[]>(`${this.endpoint}/search_query`).pipe(
          catchError((error) => {
              console.error(error);
              return [];// return empty card Array
          })
      ); 
  }

  public createCard(title: String, description: String, price: Number, type: String): Observable<Card> {
      return this.httpClient.post<Card>(`${this.endpoint}/card`,
        new Card(title, description, price, type));
  }

  public getRandomCardId(): Observable<string> {
    return this.httpClient.get(`${environment.formationApi}/random-card-id`, { responseType: 'text' });
  }

  public getCardById(id: string): Observable<Card> {
    return this.httpClient.get<Card>(`${this.endpoint}/card/${id}`); 
  }

  public deleteOneCard(id: string): Observable<Card> {
    return this.httpClient.delete<Card>(`${this.endpoint}/card/${id}`);
  }
}
