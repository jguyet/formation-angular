import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpRxjsComponent } from './tp-rxjs.component';

describe('TpRxjsComponent', () => {
  let component: TpRxjsComponent;
  let fixture: ComponentFixture<TpRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
