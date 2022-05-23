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

  constructor(private httpClient: HttpClient) {

  }

  public getCards(): Observable<Card[]> {
      return this.httpClient.get<Card[]>(`${environment.formationApi}/search_query?page=1&size=1000`);
  }

  public createCard(title: string, description: string, price: number, type: string): Observable<Card> {
      return this.httpClient.post<Card>(`${environment.formationApi}/card`,
        new Card(title, description, price, type));
  }

  public getRandomCardId(): Observable<string> {
    return this.httpClient.get(`${environment.formationApi}/random-card-id`, { responseType: 'text' });
  }

  public getCardById(cardId: string): Observable<Card> {
    return this.httpClient.get<Card>(`${environment.formationApi}/card/${cardId}`);
  }

  public removeCardById(cardId: string): Observable<Card> {
    return this.httpClient.delete<Card>(`${environment.formationApi}/card/${cardId}`);
  }
}
