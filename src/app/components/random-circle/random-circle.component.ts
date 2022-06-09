import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, Observable, timer } from 'rxjs';
import { distinctUntilChanged, map, pairwise } from 'rxjs/operators';

export class Circle {
  public turns: number = 0;
  constructor(
    public x: number,
    public y: number,
    public size: number,
    public direction: number,
    public speed: number
  ) {}
}

@Component({
  selector: 'app-random-circle',
  templateUrl: './random-circle.component.html',
  styleUrls: ['./random-circle.component.css']
})
export class RandomCircleComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', { static: false }) canvasElement: ElementRef;

  private circles$: BehaviorSubject<Circle[]> = new BehaviorSubject<Circle[]>([]);

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // logique d'input
    const events = fromEvent(this.canvasElement.nativeElement, 'click')
      .pipe(
        map((x: PointerEvent) => {
          return [x.offsetX, x.offsetY];
        }),
        map(clickPosition => {
          const randomCirclesFromPosition = this.getRandomCirclesFromPosition(clickPosition);
  
          return randomCirclesFromPosition;
        })
      );

    combineLatest(
      events,
      this.circles$.pipe(distinctUntilChanged((prev, curr) => prev.length !== curr.length))
    ).pipe(
      map(([newCircles, currentCircles]) => {
        console.log('skksksk');
        return [... currentCircles, ... newCircles]
      }),
      map(circles => circles.filter(x => x.turns < 50))
    ).subscribe((circleList) => {
      console.log('Update List', circleList);
      this.circles$.next(circleList);
    });

    timer(1000 / 25, 1000 / 25).subscribe((_) => {
      const canvas = this.canvasElement.nativeElement;
      const ctx = canvas.getContext('2d');

      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      console.log(canvas.height);

      // ctx.beginPath();
      ctx.fillStyle = 'red';
      console.log('sssss', this.circles$.value.filter(x => x.turns < 50));
      for (const circle of this.circles$.value.filter(x => x.turns < 50)) {
        this.drawRandomCircle(circle.x, circle.y, circle.size);

        const speed = circle.speed;
        switch (circle.direction) {
          case 1: circle.x += (Math.floor(Math.random() * 2) + 1) * speed; circle.y += (Math.floor(Math.random() * 2) + 1) * speed; break ;
          case 2: circle.x += (Math.floor(Math.random() * 2) + 1) * speed; circle.y -= (Math.floor(Math.random() * 2) + 1) * speed; break ;
          case 3: circle.x -= (Math.floor(Math.random() * 2) + 1) * speed; circle.y -= (Math.floor(Math.random() * 2) + 1) * speed; break ;
          case 4: circle.x -= (Math.floor(Math.random() * 2) + 1) * speed; circle.y += (Math.floor(Math.random() * 2) + 1) * speed; break ;
        }
        circle.turns += 1;
      }
      ctx.fill();
    })

    // logique d'affichage

  }

  drawRandomCircle(x: number, y: number, size: number = 20) {
    const canvas = this.canvasElement.nativeElement;
    const ctx = canvas.getContext('2d');

    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;

    // console.log(canvas.height);

    ctx.beginPath();
    // ctx.fillStyle = 'red';
    // console.log(x, y);
    // ctx.arc(0, 100, size, 0, 2 * Math.PI);
    ctx.arc(x - (size / 2), y - (size / 2), size, 0, 2 * Math.PI);
    ctx.fill();
  }


  getRandomCirclesFromPosition(position: number[]): Circle[] {
    const randomCirclesNumber = Math.floor(Math.random() * 100) + 1;
    const circles: Circle[] = [];

    for (let i = 0; i < randomCirclesNumber; i++) {
      circles.push(new Circle(
        position[0] + (Math.floor(Math.random() * 10) > 5 ? 1 : -1),
        position[1] + (Math.floor(Math.random() * 10) > 5 ? 1 : -1),
        Math.floor(Math.random() * 10) + 5,
        Math.floor(Math.random() * 4) + 1,
        Math.floor(Math.random() * 10) + 1
      ));
    }
    return circles;
  }

}
