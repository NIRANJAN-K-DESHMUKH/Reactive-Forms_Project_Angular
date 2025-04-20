import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-form-material',
  imports: [ 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './bank-form-material.component.html',
  styleUrl: './bank-form-material.component.css',
})
export class BankFormMaterialComponent {
  
  bankForm !: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.bankForm = this.fb.group({
      name: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      accountType: ['', Validators.required],
      balance: ['', [Validators.required, Validators.min(0)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      pan: ['', [Validators.required, Validators.pattern(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)]],
      openDate: ['', Validators.required],
      isInternational: [false],
      agreeTerms: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.bankForm.valid) {
      console.log('Form Submitted:', this.bankForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

