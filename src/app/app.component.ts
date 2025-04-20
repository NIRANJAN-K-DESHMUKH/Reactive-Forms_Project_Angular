import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankFormComponent } from "./components/bank-form/bank-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BankFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms-intro';
}
