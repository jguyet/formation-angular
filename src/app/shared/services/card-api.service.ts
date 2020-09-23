import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Card } from '../models/card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  private endpoint: string = environment.formationApi;

  constructor(private httpClient: HttpClient) {

  }

  public getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>('http://10.200.0.229:8080/search_query?size=100');
  }

  public getCardById(id: string): Observable<Card> {
    return this.httpClient.get<Card>(`http://10.200.0.229:8080/card/${id}`)
    .pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse && err.status === 406) {
          return of(new Card('Default', 0, 'red'));
        }
        throw err;
      })
    );
  }

  public createCard(title: string, price: number, type: string): Observable<Card> {
      return this.httpClient.post<Card>(`${this.endpoint}/card`,
        new Card(title, price, type));
  }
}
