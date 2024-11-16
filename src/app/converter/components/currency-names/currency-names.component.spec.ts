import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyNamesComponent } from './currency-names.component';

describe('CurrencyNamesComponent', () => {
  let component: CurrencyNamesComponent;
  let fixture: ComponentFixture<CurrencyNamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyNamesComponent]
    });
    fixture = TestBed.createComponent(CurrencyNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
