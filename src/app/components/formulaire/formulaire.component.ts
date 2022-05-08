import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Question } from 'src/app/shared/models/question';
import { FormulaireService } from 'src/app/shared/services/formulaire.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public questions: Question[];
  public formationForm: FormGroup;
  public completed: boolean = false;

  private invalidFieldDisplayer = (id: string): ValidatorFn => {
    return (control: AbstractControl): (ValidationErrors | null) => {
      if (!this.completed) return null;
      if (control.value != this.questions.find(x => x.id === id).r.find(x => x.valid == true).key) {
        return { invalid: true }
      }
      return null;
    };
  }

  constructor(private fb: FormBuilder, private formulaireService: FormulaireService) {
  }

  async ngOnInit() {
    let qs = await this.formulaireService.getQuestions().pipe(take(1)).toPromise();
    this.createDynamicForm(qs);
  }

  createDynamicForm(questions: Question[]): void {
    let formConfig = {};

    let storageFormData = localStorage.getItem('form') !== undefined ? JSON.parse(localStorage.getItem('form')) : undefined;

    for (let i = 0; i < questions.length; i++) {
      let defaultValue = undefined;
      if (storageFormData != null && storageFormData[questions[i].id] != undefined) {
        defaultValue = storageFormData[questions[i].id];
      }
      formConfig[questions[i].id] = this.fb.control(defaultValue, [
        Validators.required, this.invalidFieldDisplayer(questions[i].id)
      ]);
    }
    this.formationForm = this.fb.group(formConfig);
    this.questions = questions;
    if (storageFormData != undefined) {
      this.completed = true;
    }
  }

  submitForm(): void {
    console.log(this.formationForm);
    localStorage.setItem('form', JSON.stringify(this.formationForm.value));
    this.formulaireService.postResult(this.formationForm.value).subscribe(() => {
      this.completed = true;
      this.setErrors();
    });
  }

  setErrors() {
    this.questions.forEach(x => {
      if (this.formationForm.value[x.id] != x.r.find(r => r.valid === true).key) {
        this.formationForm.controls[x.id].setErrors({
          invalid: true
        });
      }
    });
  }

  form(): void {
    console.log(this.formationForm);
  }

}
