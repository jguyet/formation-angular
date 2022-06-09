import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardApiService } from 'src/app/shared/services/card-api.service';

export const emptyValidator: ValidatorFn = (c: AbstractControl): {[key: string]: any} | null => {
  return c.value === '' ? { 'empty': 'ERROR_CODE_1002' } : null;
}

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  public cardGroup: FormGroup;
  public titleCtrl: FormControl = new FormControl('', [emptyValidator], []);
  public descriptionCtrl: FormControl = new FormControl('');
  public priceCtrl: FormControl = new FormControl('');
  public typeCtrl: FormControl = new FormControl('');

  constructor(
    private fb: FormBuilder,
    private cardApiService: CardApiService,
    private router: Router) {
      this.cardGroup = this.fb.group({
        'title': this.titleCtrl,
        'description': this.descriptionCtrl,
        'price': this.priceCtrl,
        'type': this.typeCtrl
      });
    }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.cardGroup.valid) { // check
      this.cardApiService.createCard(
        this.titleCtrl.value,
        this.descriptionCtrl.value,
        +this.priceCtrl.value,
        this.typeCtrl.value
      ).subscribe(
        () => { // Chaque emition
          this.router.navigate(['/cards']);
        },
        () => { // catch

        },
        () => { // flux terminé
          console.log('flux terminé');
        }
      )
    }
  }

}
