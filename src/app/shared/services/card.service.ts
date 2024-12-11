import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { catchError, mergeMap, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CardService {
    constructor(public httpClient: HttpClient) {}

    getCards(): Observable<Card[]> {
        return this.httpClient.get<Card[]>(`${environment.apiUrl}/search_query`)
            .pipe(
                catchError(() => {
                    return of([]);
                })
            );
    }

    getRandomCardId(): Observable<string> {
        return this.httpClient.get(`${environment.apiUrl}/random-card-id`, {
            responseType: 'text'
        });
    }

    getCardById(id: string): Observable<Card> {
        return this.httpClient.get<Card>(`${environment.apiUrl}/card/${id}`);
    }

    getRandomCard(): Observable<Card> {
        return this.getRandomCardId()
            .pipe(
                mergeMap((id: string) => {
                    return this.getCardById(id);
                })
            );
    }

    createNewCard(card: Card): Observable<Card> {
        return this.httpClient.post<Card>(`${environment.apiUrl}/card`, card);
    }
}
