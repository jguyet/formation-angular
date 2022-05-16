import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { CounterComponent } from './counter.component';

const mockStore = class {
  select(str: string): Observable<number> { return of(1300); }
  dispatch(action: {
    nbr: number;
  }) {}
};

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [
        { provide: Store, useClass: mockStore }
      ],
      imports: []
    })
    .compileComponents();

    // let store = TestBed.inject(Store);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', (done: DoneFn) => {
    component.count$.subscribe((value: number) => {

      expect(value).toEqual(1300);

      done();
    })
  });
});
