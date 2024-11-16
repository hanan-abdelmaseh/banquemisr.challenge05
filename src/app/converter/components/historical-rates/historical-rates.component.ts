import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rates } from '../../Models/converter.model';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-historical-rates',
  templateUrl: './historical-rates.component.html',
  styleUrls: ['./historical-rates.component.scss']
})
export class HistoricalRatesComponent implements OnInit {
  ratesList!:Rates;
  basicFrom:string='';

  fromCurrency :string =''
  

  constructor(private _ConverterService:ConverterService , private _ActivatedRoute:ActivatedRoute){
    // this.basicFrom =this._ActivatedRoute.snapshot.queryParams['from'];
    // console.log(this.basicFrom)
  }
  ngOnInit(): void {
    this._ActivatedRoute.queryParams.subscribe((params)=>{
      this.fromCurrency = params['from'];

   });

   this.getHistoricalRates();
  }
  
  getHistoricalRates(){
    const today = new Date();
    this._ConverterService.getHistoricalRatesFromToAllSymbols(`${today.getFullYear() - 1}-11-15`, this.fromCurrency).subscribe((res)=>{
    this.ratesList = res.rates;
    // this.fromCurrency = res.base;
    console.log(this.ratesList)
   

    //console.log( Object.keys(this.ratesList).length)
    })
  }
 
}
