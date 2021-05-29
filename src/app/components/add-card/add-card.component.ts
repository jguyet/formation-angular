import { Component } from '@angular/core';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent {

  types: Array<string> = [
    "red",
    "green",
    "blue",
    "yellow"
  ];

  name: string;
  price: Number = 0;
  type: string;

  error: String;

  constructor(public cardApiService: CardApiService, public router: Router) { }

  createCard(name: string, price: number, type: string) {
    this.cardApiService.createCard(name, price, type).toPromise().then((card) => {
      this.error = "";
      this.router.navigate(["/cards"]);
    }, (e) => {
      this.error = "Error";
    });
  }

}
