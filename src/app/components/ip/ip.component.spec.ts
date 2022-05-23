import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardApiService } from 'src/app/shared/services/card-api.service';

import { IpComponent } from './ip.component';

describe('IpComponent', () => {
  let component: IpComponent;
  let fixture: ComponentFixture<IpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpComponent ],
      imports: [],
      providers: []
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
