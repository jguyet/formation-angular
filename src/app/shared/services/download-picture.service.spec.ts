import { TestBed } from '@angular/core/testing';

import { DownloadPictureService } from './download-picture.service';

describe('DownloadPictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadPictureService = TestBed.get(DownloadPictureService);
    expect(service).toBeTruthy();
  });
});
