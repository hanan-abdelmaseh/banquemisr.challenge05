import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Symbols } from '../../Models/converter.model';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-eur-details',
  templateUrl: './eur-details.component.html',
  styleUrls: ['./eur-details.component.scss']
})
export class EurDetailsComponent  implements OnInit{
  fromCurrency:string ='';
  currencyTo:string =''
  currencyNamesList!:Symbols;
  currencyMainForm!:FormGroup;
  constructor(private _ActivatedRoute: ActivatedRoute,private _ConverterService:ConverterService,
    private _Router: Router,private _FB:FormBuilder){

  }
  

  ngOnInit(): void {
     this._ActivatedRoute.queryParams.subscribe((params)=>{
        this.fromCurrency = params['from'];

     });
     this.currencyMainForm = this._FB.group({
      amount: ['' ,Validators.required],
      currencyFrom: [this.fromCurrency, Validators.required],
      currencyTo: ['', Validators.required]
    });

     this.getCurrencyValues();
  }


  
  getCurrencyValues(){
    this._ConverterService.getCureenciesNames().subscribe((res)=>{
      console.log(res);
      this.currencyNamesList= res.symbols;
     
    })
  }




  convertCurrency(currencyValues:any){
    let data = currencyValues.value;
   this.currencyTo = data.currencyTo;
    console.log(this.currencyTo);
//using api  
this._ConverterService.convertCurrency(data.fromCurrency, data.toCurrency,data.amount).subscribe((res)=>{
  console.log(res)
})
}
}