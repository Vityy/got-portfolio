import { TestBed } from '@angular/core/testing';

import { Continent } from './continent';

describe('Continent', () => {
  let service: Continent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Continent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
