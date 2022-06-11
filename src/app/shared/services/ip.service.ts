import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IpModel {
  ip: string
}

@Injectable({
  providedIn: 'root'
})
export class IpService {

  public ip: string = '127.0.0.1';

  constructor(private httpClient: HttpClient) { }

  public getIp(): Observable<string> {
    return this.httpClient.get<IpModel>('ninja.com').pipe(
      map(x => x.ip)
    );
  }
}
