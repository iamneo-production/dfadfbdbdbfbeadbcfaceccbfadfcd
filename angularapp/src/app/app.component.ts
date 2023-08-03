import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resValue: any
  fromCurrency: any
  toCurrency: any
  amount:any
  constructor(public fb: FormBuilder) { }
  CurrencyForm = this.fb.group({
    fromCurrency: [''],
    amount: [''],
    toCurrency: ['']
  })
  onSubmitt() {
    this.amount=this.CurrencyForm.get('amount').value;  
    this.fromCurrency=this.CurrencyForm.get('fromCurrency').value;
    this.toCurrency=this.CurrencyForm.get('toCurrency').value;
    //this.amount=
    //this.resValue='1.00';
    this.resValue=(this.toCurrency/this.fromCurrency)*this.amount;
    this.resValue=Math.round(this.resValue);
    this.resValue=parseFloat(this.resValue).toFixed(2);
  }
}