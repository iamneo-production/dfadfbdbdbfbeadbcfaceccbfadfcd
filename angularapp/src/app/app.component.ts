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

    if (this.fromCurrency !== null && this.toCurrency !== null) {
      this.resValue = (this.amount * this.fromCurrency) / this.toCurrency;
      this.resValue = parseFloat(this.resValue).toFixed(2);
    } else {
      this.resValue = "Invalid input";
    }
  }
}
