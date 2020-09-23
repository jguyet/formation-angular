import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Card } from 'src/app/shared/models/card';
import { CardApiService } from 'src/app/shared/services/card-api.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  public card$: Observable<Card | unknown>;

  constructor(
    public router: Router,
    public routerActiv: ActivatedRoute,
    public cardApiService: CardApiService) {
    this.card$ = this.routerActiv.params.pipe(
      map(x => x['id']),
      switchMap((id) => {
        // TODO: get Card from api by id
        return this.cardApiService.getCardById(id);
      }),
      tap(card => console.log(card))
    );
  }

  public changeUrl() {
    this.router.navigate(['/card/1222222']);
  }

  ngOnInit() {
  }

}
