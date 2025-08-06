import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tri1 } from './tri-1';

describe('Tri1', () => {
  let component: Tri1;
  let fixture: ComponentFixture<Tri1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tri1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tri1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
