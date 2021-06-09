import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, interval, of, noop } from 'rxjs';
import { finalize, pluck, scan, startWith, switchMap, takeWhile, tap } from 'rxjs/operators';
import { Car, Game, Player, Road } from './interfaces';
import * as Constants from './constants';
import { updateState } from './state';
import { render, renderGameOver } from './html-render';
import { Guardable } from 'src/app/shared/interfaces/Guardable';

@Component({
  selector: 'app-car-racing-game',
  templateUrl: './car-racing-game.component.html',
  styleUrls: ['./car-racing-game.component.css']
})
export class CarRacingGameComponent implements OnInit, Guardable {

  public editable: boolean = false;

  constructor() { }

  ngOnInit(): void {

    const car = (x: number, y: number): Car => ({ x, y, scored: false });
    const randomCar = (): Car =>
      car(0, Math.floor(Math.random() * Math.floor(Constants.gameWidth)));
    const gameSpeed$ = new BehaviorSubject(200);

    const road$ = gameSpeed$.pipe(
      switchMap(i =>
        interval(i).pipe(
          scan(
            (road: Road, _: number): Road => (
              (road.cars = road.cars.filter(c => c.x < Constants.gameHeight - 1)),
              road.cars[0].x === Constants.gameHeight / 2
                ? road.cars.push(randomCar())
                : noop,
              road.cars.forEach(c => c.x++),
              road
            ),
            { cars: [randomCar()] }
          )
        )
      )
    );

    const keys$ = fromEvent(document, 'keyup').pipe(
      startWith({ code: '' }),
      pluck('code')
    );

    const player$ = keys$.pipe(
      scan(
        (player: Player, key: string): Player => {
          player.y +=
            key === 'ArrowLeft' && player.y > 0
              ? -1
              : key === 'ArrowRight' && player.y < Constants.gameWidth - 1
              ? 1
              : 0;
          if (player.y != 0) {
            this.editable = true;
          }
          return player;
        },
        { y: 0 }
      )
    );

    const state$ = of({
      score: 1,
      lives: 3,
      level: 1,
      duration: Constants.levelDuration,
      interval: 200
    });

    const isNotGameOver = ([state]: Game) => state.lives > 0;

    const game$ = combineLatest([state$, road$, player$]).pipe(
      scan(updateState(gameSpeed$)),
      tap(render),
      takeWhile(isNotGameOver),
      finalize(renderGameOver)
    );

    game$.subscribe();

  }

}
