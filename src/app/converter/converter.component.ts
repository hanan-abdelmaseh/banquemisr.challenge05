import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rates, Symbols } from './Models/converter.model';
import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent  implements OnInit{
  ratesList!: Rates;


  currencyMainForm!:FormGroup
  currencyNamesList!: Symbols;
  fromCurrency:string ='';
   
  toCurrency:string =''
  baseCurrency: string = '';
  baseValue: number = 0;
  currencyExchangeValue: number = 0;

  //for swap
  selectedValue1: string = '';  
  selectedValue2: string = '';

  constructor(private _ConverterService: ConverterService, private _FB: FormBuilder) {
    this.currencyMainForm = this._FB.group({
      amount: ['', Validators.required],
      currencyFrom: ['', Validators.required],
      currencyTo: ['', Validators.required]
    });
  }

  
  



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
    let data = currencyValues.value;
    this.toCurrency = data.currencyTo;
    this.fromCurrency = data.currencyFrom;
    console.log(data);

    //this.currencyExchangeValue = data.amount * data.currencyTo;
    //using api  
    this._ConverterService.convertCurrency(data.fromCurrency, data.toCurrency, data.amount).subscribe((res) => {
      console.log(res)
    })

  }



  swapValues(currencies:any){
    console.log(currencies.value);
   
    const temp = this.selectedValue1;
    this.selectedValue1 = this.selectedValue2;
    this.selectedValue2 = temp;
  }
}
