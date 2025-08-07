import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cn3 } from './tri-3';

describe('Cn3', () => {
  let component: Cn3;
  let fixture: ComponentFixture<Cn3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cn3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cn3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
