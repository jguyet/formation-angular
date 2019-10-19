import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    public title = 'Botick';
    public version = '1.0';

    public toto = true;

    public totoList = [0, 1, 2];

    public alphas = [];

    constructor() {
        this.alphas = this.getAlphabeticsFrancixPanoramixJeremix();
    }

    public getAlphabeticsFrancixPanoramixJeremix() {
        let array = []; for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i += 1) { array.push(String.fromCharCode(i)); }; return array;
    }

}
