import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch2 } from './tri-2';

describe('Ch2', () => {
  let component: Ch2;
  let fixture: ComponentFixture<Ch2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ch2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
