import { TestBed } from '@angular/core/testing';

import { VideoPageService } from './video-page.service';

describe('VideoPageService', () => {
  let service: VideoPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
