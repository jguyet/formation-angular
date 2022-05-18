import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';

export function isEmptyValidator(): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    return c.value === '' ? { error: 'ERROR_258' } : null;
  };
}

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent {

  public cardFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cardApiService: CardApiService,
    private router: Router) {
      this.cardFormGroup = this.fb.group({
        title: this.fb.control('', [isEmptyValidator()], []),
        description: this.fb.control('', [], []),
        price: this.fb.control('0', [], []),
        type: this.fb.control('yellow', [], [])
      });
    }

  test(): void {
    console.log(this.cardFormGroup);
  }

  validateForm(): void {
    if (this.cardFormGroup.invalid) { return ; }
    this.cardApiService.createCard(
      this.cardFormGroup.get('title').value,
      this.cardFormGroup.get('description').value,
      this.cardFormGroup.get('price').value,
      this.cardFormGroup.get('type').value,
    ).subscribe((card: Card) => {
      if (card === undefined) {
        console.log('bug');
        return ;
      }
      this.router.navigate(['/cards']);
    });
  }

}
