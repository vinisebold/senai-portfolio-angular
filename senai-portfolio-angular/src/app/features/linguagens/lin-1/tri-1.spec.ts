import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lin1 } from './tri-1';

describe('Lin1', () => {
  let component: Lin1;
  let fixture: ComponentFixture<Lin1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lin1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lin1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
