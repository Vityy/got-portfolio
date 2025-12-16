import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsList } from './continents-list';

describe('ContinentsList', () => {
  let component: ContinentsList;
  let fixture: ComponentFixture<ContinentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
