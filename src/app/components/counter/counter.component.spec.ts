import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardApiService } from 'src/app/shared/services/card-api.service';

import { CounterComponent } from './counter.component';

export class ValueMockService {
  getValue(): string {
    return '';
  }
}

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [
        { type: CardApiService, useClass: ValueMockService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
