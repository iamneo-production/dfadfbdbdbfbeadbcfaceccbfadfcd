import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  resValue: any = null;
  fromCurrency: number = 1.126735; // Default to USD
  toCurrency: number = 1.126735; // Default to USD
  amount: number = 0;
  CurrencyForm: FormGroup;

  exchangeRates = {
    USD: 1.126735,
    GBP: 0.876893,
    INR: 79.677056
  };

  constructor(public fb: FormBuilder) {
    this.CurrencyForm = this.fb.group({
      fromCurrency: ['USD'],
      amount: [''],
      toCurrency: ['USD']
    });
  }

  onSubmitt() {
    this.amount = this.CurrencyForm.get('amount').value;
    this.fromCurrency = this.exchangeRates[this.CurrencyForm.get('fromCurrency').value];
    this.toCurrency = this.exchangeRates[this.CurrencyForm.get('toCurrency').value];
    this.resValue = ((this.toCurrency / this.fromCurrency) * this.amount).toFixed(2);
  }
}
