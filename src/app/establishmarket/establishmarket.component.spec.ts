import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmarketComponent } from './establishmarket.component';

describe('EstablishmarketComponent', () => {
  let component: EstablishmarketComponent;
  let fixture: ComponentFixture<EstablishmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
