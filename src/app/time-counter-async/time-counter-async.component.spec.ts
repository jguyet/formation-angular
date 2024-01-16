import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCounterAsyncComponent } from './time-counter-async.component';

describe('TimeCounterAsyncComponent', () => {
  let component: TimeCounterAsyncComponent;
  let fixture: ComponentFixture<TimeCounterAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCounterAsyncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeCounterAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
