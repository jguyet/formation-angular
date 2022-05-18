import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';
import { Stats } from '../models/stats';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  constructor(public httpClient: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    return this.httpClient.get<any[]>(`${environment.formationApi}/formulaire`).pipe(
        catchError((error) => {
            console.error(error);
            return []; // return empty Array
        })
    );
  }

  public postResult(result: { [key: string]: string }): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.formationApi}/formulaire`, result);
  }

  public getStats(): Observable<Stats> {
    return this.httpClient.get<Stats>(`${environment.formationApi}/formulaire/stats`);
  }
}
