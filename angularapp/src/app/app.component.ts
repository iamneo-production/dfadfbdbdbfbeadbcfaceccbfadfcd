import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resValue: any;
  fromCurrency!: string; // Marked as initialized
  toCurrency!: string;   // Marked as initialized
  amount!: number;       // Marked as initialized
  exchangeRates: { [currency: string]: number } = {
    'USD': 1.126735,
    'GBP': 0.876893,
    'INR': 79.677056
  };

  constructor(public fb: FormBuilder) {
    this.CurrencyForm = this.fb.group({
      fromCurrency: ['USD'],
      amount: [''],
      toCurrency: ['USD']
    });
  }

  CurrencyForm: FormGroup;

  onSubmitt() {
    this.amount = +this.CurrencyForm.get('amount')?.value;
    this.fromCurrency = this.CurrencyForm.get('fromCurrency')?.value;
    this.toCurrency = this.CurrencyForm.get('toCurrency')?.value;

    if (this.fromCurrency === 'USD') {
      this.resValue = (this.amount * this.exchangeRates[this.toCurrency]).toFixed(2);
    } else if (this.toCurrency === 'USD') {
      this.resValue = (this.amount / this.exchangeRates[this.fromCurrency]).toFixed(2);
    } else {
      const exchangeRateFrom = this.exchangeRates[this.fromCurrency];
      const exchangeRateTo = this.exchangeRates[this.toCurrency];

      if (exchangeRateFrom !== undefined && exchangeRateTo !== undefined) {
        this.resValue = ((this.amount * exchangeRateTo) / exchangeRateFrom).toFixed(2);
      } else {
        this.resValue = 'Invalid conversion';
      }
    }
  }
}
