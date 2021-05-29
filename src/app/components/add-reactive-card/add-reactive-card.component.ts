import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export function forbiddenNameValidatorB(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
  

    // return this.cardApiService.getCards().pipe(map(x => {
    //   return forbidden ? {forbiddenName: control.value} : null;
    // }));
    return forbidden ? {forbiddenName: control.value} : null;
  };
};

@Component({
  selector: 'app-add-reactive-card',
  templateUrl: './add-reactive-card.component.html',
  styleUrls: ['./add-reactive-card.component.css']
})
export class AddReactiveCardComponent implements OnInit {

  public readonly types: Array<string> = [
    "red",
    "green",
    "blue",
    "yellow"
  ];

  public formGroup: FormGroup;

  public title: FormControl = new FormControl('', [Validators.required], this.forbiddenNameValidator(/bob/));
  public price: FormControl = new FormControl(0, [Validators.required]);
  public type: FormControl = new FormControl('', [Validators.required]);

  public error: String;

  constructor(
    public formBuilder: FormBuilder,
    public cardApiService: CardApiService,
    public router: Router) {
    this.formGroup = this.formBuilder.group({
      'titleCtrl': this.title,
      'price': this.price,
      'type': this.type
    });
    this.formGroup.get('titleCtrl').statusChanges.subscribe(console.log);
  }

  forbiddenNameValidator(nameRe: RegExp): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
      const forbidden = nameRe.test(control.value);

      console.log('XXXXX');
    

      return this.cardApiService.getCards().pipe(map(x => {
        return forbidden ? {forbiddenName: control.value} : null;
      }));
    };
  }

  ngOnInit() {
  }

  createCard() {
    console.log(this.formGroup, this.title.hasError('required'), this.price, this.type);
    this.cardApiService.createCard(this.title.value, this.price.value, this.type.value).toPromise().then((card) => {
      this.error = "";
      this.router.navigate(["/cards"]);
    }, (e) => {
      this.error = "Error";
    });
  }

}
