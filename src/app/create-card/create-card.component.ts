import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CardApiService } from '../shared/services/card-api.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit, OnChanges {

  public cardGroup: FormGroup;

  public title: FormControl = new FormControl('', [Validators.required]);
  public type: FormControl = new FormControl('', [Validators.required]);
  public price: FormControl = new FormControl('', [Validators.required]);
  
  constructor(public cardApiService: CardApiService) {
    this.cardGroup = new FormGroup({
      title: this.title,
      type: this.type,
      price: this.price
    });
  }

  ngOnInit() {
  }

  submit(event: any) {
    console.log(event);
    this.cardApiService.createCard(this.title.value, this.price.value, this.type.value)
      .subscribe((value) => {
        console.log(value);
      });
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('changes: ', changes);
  }
}
