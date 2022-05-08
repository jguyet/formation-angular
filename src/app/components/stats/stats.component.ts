import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/shared/models/question';
import { Stats } from 'src/app/shared/models/stats';
import { FormulaireService } from 'src/app/shared/services/formulaire.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public stats$: Observable<any>;

  constructor(private formulaireService: FormulaireService) { }

  ngOnInit(): void {
    this.stats$ = this.formulaireService.getStats();
  }

}
