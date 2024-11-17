import { Component, OnInit } from '@angular/core';
import { Symbols } from '../../Models/converter.model';
import { ConverterService } from '../../services/converter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-names',
  templateUrl: './currency-names.component.html',
  styleUrls: ['./currency-names.component.scss']
})
export class CurrencyNamesComponent implements OnInit{
  currencyNamesList!:Symbols;
  fromCurrency:string ='';
  toCurrency:string=''

  constructor(private _ConverterService:ConverterService , private _ActivatedRoute:ActivatedRoute ){}
  
  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe((params)=>{
      this.fromCurrency = params['from'];

   });
    this.getCurrenciesNames()
  }

  getCurrenciesNames(){

    this._ConverterService.getCureenciesNames().subscribe((res)=>{
this.currencyNamesList = res.symbols
    })

  }

}