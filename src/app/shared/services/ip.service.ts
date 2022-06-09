import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export class IpModel {
  ip: string;
}

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(public httpClient: HttpClient) { }

  getIp(): Observable<string> {
    return this.httpClient.get<IpModel>(`${environment.formationApi}/get-ip`).pipe(
      map(ipModel => {
        return ipModel.ip;
      })
    );
  }
}
