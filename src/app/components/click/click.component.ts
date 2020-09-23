import { Component, OnInit } from '@angular/core';
import { fromEvent, TimeInterval } from 'rxjs';
import { timeInterval, takeWhile, scan, tap, repeat, finalize, filter } from 'rxjs/operators';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  texts = {
    0: 'click, click',
    1: 'keep clicking',
    2: 'wow',
    3: 'not tired yet?!',
    4: 'click master!',
    5: 'inhuman!!!',
    6: 'ininhuman!!!'
  };

  constructor() { }

  ngOnInit() {

    interface State {
      score: number;
      interval: number;
      threshold: number;
    }
    
    fromEvent(document, 'mousedown').pipe(
      timeInterval(),
      scan<TimeInterval<Event>, State>((state, timeInterval) => ({
        score: state.score + 1,
        interval: timeInterval.interval,
        threshold: state.threshold - 2
      }), { score: 0, interval: 0, threshold: 300 }),
      takeWhile((state: State) => state.interval < state.threshold),
      tap((state: State) => this.render(state.score, Math.floor(state.score / 10))),
      repeat()
    ).subscribe();
  }

  text = (score: number, level: number) => `${this.texts[level]} \n ${score}`;
  
  render = (score: number, level: number) => {
    const id = 'level' + level;
    const element = document.getElementById(id);
    const innerText = this.text(score, level);
    if (element) {
      element.innerText = innerText;
    } else {
      const elem = document.createElement('div');
      elem.id = id;
      elem.style.zIndex = `${level}`;
      elem.style.position = 'absolute';
      elem.style.height = '150px';
      elem.style.width = '150px';
      elem.style.borderRadius = '10px';
      const position = level * 20;
      elem.style.top = position + 'px';
      elem.style.left = position + 'px';
      const col = 100 + position;
      elem.style.background = `rgb(0,${col},0)`;
      elem.style.color = 'white';
      elem.innerText = innerText;
      elem.style.textAlign = 'center';
      elem.style.verticalAlign = 'middle';
      elem.style.lineHeight = '90px';
      document.getElementById('clickZone').appendChild(elem);
    }
  };
  
  clear = () => (document.getElementById('clickZone').innerText = '');

}
