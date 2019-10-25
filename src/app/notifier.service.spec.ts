import { TestBed } from '@angular/core/testing';

import { NotifierService } from './notifier.service';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class MockStore {
  dispatch() {
    console.log('SALUTATION');
  }
}

fdescribe('NotifierService', () => {
  let store: Store<any>;

  beforeEach(() => {
    /** SpyObject */
    store = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      declarations: [NotifierService],
      providers: [
        { provide: Store, useClass: MockStore },
        { provide: HttpClient, useValue: { get: () => {} }}
      ]
    });
  });

  it('should be created', () => {
    const service: NotifierService = TestBed.get(NotifierService);
    expect(service).toBeTruthy();
  });

  it('should be defined', () => {
    const service: NotifierService = TestBed.get(NotifierService);
    expect(service).toBeDefined();
  });

  fit('should be array not empty', (done) => {
    this.httpClient.get.and.returnValue(new Observable((observer) => {
      observer.next('55');
      observer.complete();
    }));
    const service: NotifierService = TestBed.get(NotifierService);
    service.toto().subscribe(x => {
      expect(x).toEqual('55');
      done();
    })
  });

});
