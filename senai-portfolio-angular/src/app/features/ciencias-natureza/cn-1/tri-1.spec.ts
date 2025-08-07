import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cn1 } from './tri-1';

describe('Cn1', () => {
  let component: Cn1;
  let fixture: ComponentFixture<Cn1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cn1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cn1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
