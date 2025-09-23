import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimestrePage } from './trimestre-page';

describe('TrimestrePage', () => {
  let component: TrimestrePage;
  let fixture: ComponentFixture<TrimestrePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimestrePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrimestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
