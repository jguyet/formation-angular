import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloadPictureService {

  constructor(
    public httpClient: HttpClient,
    public domSanitazer: DomSanitizer) { }

  download(url: string): Observable<string> {
    return this.httpClient.get(url, { responseType: 'arraybuffer' })
    .pipe(
      map((data) => {
        console.log(data);
        let blob = new Blob([data], { type: 'image/png'});
        let finalUrl: string = this.domSanitazer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob)) as string;

        console.log(finalUrl);

        return finalUrl;
      })
    );
  }
}
