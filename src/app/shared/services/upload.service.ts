import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

    private endpoint: string = environment.formationApi;

    constructor(public httpClient: HttpClient) { }

    public upload(data): Observable<{ type: any, status: string, progress?: number, message?: string, content?: string, error?: any; }> {
        let uploadURL = `${this.endpoint}/storage`;
    
        return this.httpClient.post<any>(uploadURL, data, {
          reportProgress: true,
          observe: 'events'
        }).pipe(
            catchError((err) => {
                console.log(err);
                return ([{ type: null, status: 'error', message: err.error ? err.error.error ? err.error.error.message : undefined : undefined, error: err }]);
            }),
            map((event: any) => {
                switch (event.type) {
                    case HttpEventType.UploadProgress:
                    const progress = Math.round(100 * event.loaded / event.total);
                    return { type: event.type, status: 'progress', progress: progress };
                    case HttpEventType.Response:
                    return { type: event.type, status: 'complete', content: event.body };
                    default:
                    return { type: event.type, status: event.status ? event.status : 'unknown', message: event.message, error: event.error };
                }
            })
        );
      }
}
