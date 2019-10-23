import { Injectable } from '@angular/core';
import { Card } from '../models/Card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  private protocol: string = 'http://';
  private endpoint: string = '192.168.3.100:8080';

  constructor(private httpClient: HttpClient) { }

  public getCards(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${this.protocol}${this.endpoint}/search_query`);
  }

  public createCard(title: string, price: number, type: string): Observable<Card> {
    return this.httpClient.post<Card>(`${this.protocol}${this.endpoint}/card`,
      new Card(title, price, type));
  }
}
