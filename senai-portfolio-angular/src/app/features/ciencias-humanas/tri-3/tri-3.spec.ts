import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tri3 } from './tri-3';

describe('Tri3', () => {
  let component: Tri3;
  let fixture: ComponentFixture<Tri3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tri3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tri3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
