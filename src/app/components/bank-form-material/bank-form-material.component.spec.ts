import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankFormMaterialComponent } from './bank-form-material.component';

describe('BankFormMaterialComponent', () => {
  let component: BankFormMaterialComponent;
  let fixture: ComponentFixture<BankFormMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankFormMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankFormMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
