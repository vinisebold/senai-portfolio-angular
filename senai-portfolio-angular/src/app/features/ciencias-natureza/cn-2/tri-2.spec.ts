import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cn2 } from './tri-2';

describe('Cn2', () => {
  let component: Cn2;
  let fixture: ComponentFixture<Cn2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cn2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cn2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
