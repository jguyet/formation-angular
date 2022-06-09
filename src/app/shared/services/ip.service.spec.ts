import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IpModel, IpService } from './ip.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const MockHttpClient = class {
  get(): Observable<string> {
    return of('')
  }
};

describe('IpService', () => {
  let service: IpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        // { provide: HttpClient, useClass: MockHttpClient }
      ]
    });
    service = TestBed.inject(IpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getIp should be return ip format', (done: DoneFn) => {
    const testCase: IpModel  = {
      ip: '127.0.0.1'
    };
    const httpClient = TestBed.inject(HttpClient);
    const httpClientGetSpy = spyOn(httpClient, 'get');

    httpClientGetSpy.and.returnValue(of(testCase));

    service.getIp().subscribe((ip) => {
      expect(ip).toBe(testCase.ip);
      done();
    });
  });

});
