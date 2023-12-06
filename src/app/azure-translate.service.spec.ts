import { TestBed } from '@angular/core/testing';

import { AzureTranslateService } from './azure-translate.service';

describe('AzureTranslateService', () => {
  let service: AzureTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
