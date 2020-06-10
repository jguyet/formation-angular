import { TestBed, async, inject } from '@angular/core/testing';

import { SimpleSecurityGuard } from './simple-security.guard';

describe('SimpleSecurityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleSecurityGuard]
    });
  });

  it('should ...', inject([SimpleSecurityGuard], (guard: SimpleSecurityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
