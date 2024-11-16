import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Rates, Symbols } from './Models/converter.model';
import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent  implements OnInit{
  ratesList!: Rates;
  currencyNamesList!: Symbols;
  baseCurrency: string = '';
  baseValue: number = 0;
  currencyExchangeValue: number = 0;

  constructor(private _ConverterService: ConverterService, private _FB: FormBuilder) {

  }


  currencyForm = this._FB.group({
    amount: ['', Validators.required],
    currencyForm: ['', Validators.required],
    currencyTo: ['', Validators.required]
  });



  ngOnInit(): void {
    this.getCurrencyValues()
  }


  getCurrencyValues() {
    this._ConverterService.getCureenciesNames().subscribe((res) => {
      console.log(res);
      this.currencyNamesList = res.symbols;

    })
  }


  convertCurrency(currencyValues: any) {
    console.log(currencyValues);
    let data = currencyValues.value
    console.log(data);

    //this.currencyExchangeValue = data.amount * data.currencyTo;
    //using api  
    this._ConverterService.convertCurrency(data.fromCurrency, data.toCurrency, data.amount).subscribe((res) => {
      console.log(res)
    })

  }



  swapValues(currencies:any){
    console.log(currencies.value);
   
  }
}
