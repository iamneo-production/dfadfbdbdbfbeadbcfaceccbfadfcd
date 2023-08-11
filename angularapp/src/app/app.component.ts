import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
//import { DOCUMENT } from "@angular/common";
@Component({
selector: 'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']
})
export class AppComponent {
resValue: any
fromCurrency: any
toCurrency: any
amount:any
CurrencyForm :FormGroup; 
constructor(public fb: FormBuilder) { 
this.CurrencyForm=this.fb.group({
fromCurrency: [''],
amount: [''],
toCurrency: ['']
 });
}
onSubmitt() {
    if(this.CurrencyForm){
 this.amount=this.CurrencyForm.get('amount')?.value;
 this.fromCurrency=this.CurrencyForm.get('fromCurrency')?.value;
 this.toCurrency=this.CurrencyForm.get('toCurrency')?.value;
 //this.amount=
 //this.resValue='1.00';
 if(this.amount!==null && this.CurrencyForm!==null && this.toCurrency!==null){
 this.resValue=(this.toCurrency/this.fromCurrency)*this.amount;
 this.resValue=Math.round(this.resValue*100)/100;
 //this.resValue=parseFloat(this.resValue).toFixed(2);
 }
}
 }
}