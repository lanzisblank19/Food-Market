import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostratingComponent } from './mostrating.component';

describe('MostratingComponent', () => {
  let component: MostratingComponent;
  let fixture: ComponentFixture<MostratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
