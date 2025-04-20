import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-form',
  imports: [ReactiveFormsModule],
  templateUrl: './bank-form.component.html',
  styleUrl: './bank-form.component.css'
})

export class BankFormComponent {
  bankForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

