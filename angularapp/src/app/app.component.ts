// app.component.ts
import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resValue: any;
  fromCurrency: any;
  toCurrency: any;
  amount: any;

  constructor(public fb: FormBuilder) { }

  CurrencyForm = this.fb.group({
    fromCurrency: [''],
    amount: [''],
    toCurrency: ['']
  });

  onSubmitt() {
    this.amount = this.CurrencyForm.get('amount')?.value;
    this.fromCurrency = this.CurrencyForm.get('fromCurrency')?.value;
    this.toCurrency = this.CurrencyForm.get('toCurrency')?.value;

    const exchangeRates: { [key: string]: number } = {
      'USD': 1.126735,
      'GBP': 0.876893,
      'INR': 79.677056
    };

    if (this.fromCurrency && this.toCurrency && this.amount) {
      if (this.fromCurrency === this.toCurrency) {
        this.resValue = this.amount; // Same currency, no conversion needed
      } else if (exchangeRates[this.fromCurrency] && exchangeRates[this.toCurrency]) {
        const exchangeRateFrom = exchangeRates[this.fromCurrency];
        const exchangeRateTo = exchangeRates[this.toCurrency];
        this.resValue = ((this.amount / exchangeRateFrom) * exchangeRateTo).toFixed(2);
      } else {
        this.resValue = "Invalid conversion";
      }
    } else {
      this.resValue = "Invalid input";
    }
  }
}
