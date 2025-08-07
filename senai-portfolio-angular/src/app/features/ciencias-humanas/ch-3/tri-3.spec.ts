import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ch3 } from './tri-3';

describe('Ch3', () => {
  let component: Ch3;
  let fixture: ComponentFixture<Ch3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ch3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ch3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
