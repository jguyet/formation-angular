import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IpService } from './ip.service';
import { HttpClient } from '@angular/common/http';


describe('IpService', () => {
  let service: IpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: class {
            get() { return of({ ip: '127.0.0.1' }); }
          }
        }
      ]
    });
    service = TestBed.inject(IpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ip attribute should match ip address format', () => {
    const ipFormat = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/gm;
    
    expect(service.ip).toMatch(ipFormat);
  });

  it('getIp erased :P', async () => {
    const ipTest = '127.0.0.1';
    const getIpSpy = spyOn(service, 'getIp');

    // simulation du retour
    getIpSpy.and.returnValue(of(ipTest));

    const ip = await service.getIp().pipe(take(1)).toPromise();

    expect(ip).toBe(ipTest);
  })

  it('getIp should return correct ip format', async () => {
    const ipTest = '127.0.0.1';
    const httpClient = TestBed.inject(HttpClient);
    const getIpSpy = spyOn(httpClient, 'get');

    // simulation du retour
    getIpSpy.and.returnValue(of({ ip: ipTest }));

    const ip = await service.getIp().pipe(take(1)).toPromise();

    expect(ip).toBe(ipTest);
  })

});
