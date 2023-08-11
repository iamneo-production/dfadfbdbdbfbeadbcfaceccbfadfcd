import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resValue: any
  fromCurrency: any
  toCurrency: any
  amount: any

  constructor(public fb: FormBuilder) { }

  CurrencyForm = this.fb.group({
    fromCurrency: [''],
    amount: [''],
    toCurrency: ['']
  })

  onSubmitt() {
    this.amount = this.CurrencyForm.get('amount').value;
    this.fromCurrency = this.CurrencyForm.get('fromCurrency').value;
    this.toCurrency = this.CurrencyForm.get('toCurrency').value;

    if (this.fromCurrency !== null && this.toCurrency !== null) {
      this.fromCurrency = parseFloat(this.fromCurrency);
      this.toCurrency = parseFloat(this.toCurrency);

      if (!isNaN(this.fromCurrency) && !isNaN(this.toCurrency)) {
        this.resValue = (this.toCurrency / this.fromCurrency) * this.amount;
        this.resValue = Math.round(this.resValue);
        this.resValue = parseFloat(this.resValue).toFixed(2);
      } else {
        this.resValue = "Invalid input";
      }
    } else {
      this.resValue = "Form controls are not available.";
    }
  }
}
