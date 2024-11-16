import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {
  fromCurrency:string ='';
  toCurrency:string=''
  ratesList!:any;
  constructor(private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,  private _ConverterService :ConverterService){

  }

  ngOnInit(): void {
     this._ActivatedRoute.queryParams.subscribe((params)=>{
        this.fromCurrency = params['from'];
        this.toCurrency= params['to']
     });
     this.getHistoricalRates()
  }


  getHistoricalRates(){
    const today = new Date();
    this._ConverterService.getHistoricalRatesFromToOneSymbol(`${today.getFullYear() - 1}-11-15`, this.fromCurrency,this.toCurrency).subscribe((res)=>{
    this.ratesList = res.rates;
    // this.fromCurrency = res.base;
    console.log(this.ratesList)
   

    //console.log( Object.keys(this.ratesList).length)
    })
  }
}
