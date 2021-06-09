import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of, ReplaySubject, timer } from 'rxjs';
import { map, tap, timeout } from 'rxjs/operators';
import { Article } from './article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  //////////////////////////////////////////////////

  public readonly articles: Array<Article> = [
    new Article('angular', 'jeremy', 'formation angular'),
    new Article('angular avancé', 'jeremy', 'formation angular avancé'),
    new Article('ionic', 'nico', 'formation ionic'),
    new Article('scala', 'nico', 'formation scala')
  ]; 

  public readonly authorsOfTheMonth: Array<string> = [
    'jeremy'
  ];

  //////////////////////////////////////////////////

  public articleOfAuthorOfTheMonth$: Observable<Article[]>;

  constructor() {}

  ngOnInit(): void {

    ///////////////////////////////

    // call http
    const articlesSubject$ = timer(1000).pipe(map(x => {
      return this.articles;
    }));

    // call http
    const authorsOfTheMonthSubject$ = timer(1000).pipe(map(x => {
      return this.authorsOfTheMonth;
    }));

    ///////////////////////////////

    const articles$: Observable<Article[]> = articlesSubject$;
    const authorsOfTheMonth$: Observable<string[]> = authorsOfTheMonthSubject$;//.asObservable();

    this.articleOfAuthorOfTheMonth$ = combineLatest([
      articles$,
      authorsOfTheMonth$
    ]).pipe(
      tap(([articles, authorsOfTheMonth]) => {
        console.log(articles, authorsOfTheMonth);
      }),
      map(([articles, authorsOfTheMonth]) => {
        return articles.reduce((a, b) => {
          if (authorsOfTheMonth.includes(b.author)) {
            a.push(b);
          }
          return a;
        }, new Array<Article>());
      })
    );
  }

}
