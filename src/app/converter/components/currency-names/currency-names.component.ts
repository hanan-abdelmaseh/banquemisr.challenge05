import { Component, OnInit } from '@angular/core';
import { Symbols } from '../../Models/converter.model';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-currency-names',
  templateUrl: './currency-names.component.html',
  styleUrls: ['./currency-names.component.scss']
})
export class CurrencyNamesComponent implements OnInit{
  currencyNamesList!:Symbols;

  constructor(private _ConverterService:ConverterService){}
  
  ngOnInit(): void {
    this.getCurrenciesNames()
  }

  getCurrenciesNames(){

    this._ConverterService.getCureenciesNames().subscribe((res)=>{
this.currencyNamesList = res.symbols
    })

  }

}