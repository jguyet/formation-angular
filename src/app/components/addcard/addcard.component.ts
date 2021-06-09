import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardApiService } from 'src/app/shared/services/card-api.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

  public titleControl: FormControl = new FormControl('', [Validators.required]);
  public priceControl: FormControl = new FormControl(10, [Validators.required]);
  public typeControl: FormControl = new FormControl('', [Validators.required]);
  public cardGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public cardApiService: CardApiService,
    public router: Router) {
    this.cardGroup = formBuilder.group({
      'title': this.titleControl,
      'price': this.priceControl,
      'type': this.typeControl
    });
    
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.cardApiService.createCard(
      this.titleControl.value,
      this.priceControl.value,
      this.typeControl.value).subscribe(() => {
        this.router.navigate(['/card']);
      });
  }

}
