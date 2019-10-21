import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public valeur: string = 'valeur';
  public toto: string           = 'build';
  public production: boolean   = environment.production;

  public arr: Array<string> = ['1', '2'];

  public parentMethod(event: string) {
    console.log(`ENFANT DIT : ${event}`);
  }

}
