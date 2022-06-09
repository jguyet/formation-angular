import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
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
      return this.httpClient.get<Card[]>(`${this.endpoint}/search_query?page=1&size=1000`); 
  }

  public createCard(title: string, description: string, price: number, type: string): Observable<Card> {
      return this.httpClient.post<Card>(`${this.endpoint}/card`,
        new Card(title, description, price, type));
  }

  public getRandomCard(): Observable<Card> {
    return this.httpClient.get(`${this.endpoint}/random-card-id`, { responseType: 'text' })
    .pipe(
      tap(randomId => {
        console.log(`Step1 ${randomId}`);
      }),
      mergeMap((randomId) => {
        return this.httpClient.get<Card>(`${this.endpoint}/card/${randomId}`);
      }),
      tap(card => {
        console.log(`Step2`, card);
      }),
    )
  }

  public removeCardById(id: string): Observable<Card> {
    return this.httpClient.delete<Card>(`${this.endpoint}/card/${id}`);
  }
}
