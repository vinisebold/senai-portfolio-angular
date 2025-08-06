import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tri2 } from './tri-2';

describe('Tri2', () => {
  let component: Tri2;
  let fixture: ComponentFixture<Tri2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tri2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tri2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
