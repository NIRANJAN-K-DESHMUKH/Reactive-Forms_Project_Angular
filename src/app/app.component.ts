import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankFormComponent } from "./components/bank-form/bank-form.component";
import { BankFormMaterialComponent } from './components/bank-form-material/bank-form-material.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BankFormComponent, BankFormMaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms-intro';
}
