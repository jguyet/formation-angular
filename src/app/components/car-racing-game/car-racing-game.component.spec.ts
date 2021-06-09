import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRacingGameComponent } from './car-racing-game.component';

describe('CarRacingGameComponent', () => {
  let component: CarRacingGameComponent;
  let fixture: ComponentFixture<CarRacingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRacingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRacingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
