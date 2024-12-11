import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { CardService } from '../../shared/services/card.service';
import { Card } from '../../shared/models/card';
import { Router } from '@angular/router';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

// TODO: Validateur Synchrone isEmptyValidator
// Etapes:
// 1. verifier si la value est vide (value == '' ? {empty: 'Le champ est vide'} : null)
const isEmptyValidator = (): ValidatorFn => {
    return (c: AbstractControl): { [key: string]: any } | null => {
        return c.value === '' ? { 'empty': 'Le champ est vide' } : null;
    }
}

// TODO: Validateur Asynchrone cardExistsValidator
// Besoins:
// CardService
// Etapes:
// 1. Recuperer toutes les cards de la base de donnée
// 2. Comparer chaques title avec la value de notre input
// 3. retourner une erreur si un des cards possede le même titre
const cardExistsValidator = (cardService: CardService): AsyncValidatorFn => {
    return (c: AbstractControl): Observable<{ [key: string]: any } | null> => {
        return cardService.getCards()
            .pipe(
                map((listOfCards: Card[]) => {
                    const found = listOfCards.find((card: Card) => card.title === c.value) !== undefined;
                    return found;
                }),
                map((found: boolean) => {
                    return found ? { 'exists': 'titre deja pris' } : null;
                })
            );
    }
}


@Component({
    selector: 'app-new-card',
    imports: [
        SharedModule,
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './new-card.component.html',
    styleUrl: './new-card.component.css',
})
export class NewCardComponent {

    formGroup: FormGroup;
    loading: boolean = false;

    constructor(
        public fb: FormBuilder,
        public cardService: CardService,
        public router: Router) {
        
        this.formGroup = this.fb.group({
            'title': this.fb.control('', [
                isEmptyValidator()
            ], cardExistsValidator(cardService)),
            'description': this.fb.control(''),
            'price': this.fb.control(0),
            'type': this.fb.control('blue')
        });
    }

    submit() {
        if (this.formGroup.invalid) {
            return ;
        }
        this.loading = true;

        const newCard = new Card(
            this.formGroup.controls['title'].value,
            this.formGroup.controls['description'].value,
            this.formGroup.controls['price'].value,
            this.formGroup.controls['type'].value
        );

        console.log('newCard', newCard);

        this.cardService.createNewCard(newCard)
            .subscribe(
                (card: Card) => {
                    if (card === undefined) { // cas en erreur
                        this.loading = false;
                        return ;
                    }
                    console.log(card);
                    this.loading = false;
                    this.router.navigate(['/']);
                }
        );
    }
}
