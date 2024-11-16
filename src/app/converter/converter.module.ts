import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { CurrencyNamesComponent } from './components/currency-names/currency-names.component';
import { EurDetailsComponent } from './components/eur-details/eur-details.component';
import { UsdDetailsComponent } from './components/usd-details/usd-details.component';
import { HistoricalRatesComponent } from './components/historical-rates/historical-rates.component';


@NgModule({
  declarations: [
    ConverterComponent,
    CurrencyDetailsComponent,
    CurrencyNamesComponent,
    EurDetailsComponent,
    UsdDetailsComponent,
    HistoricalRatesComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule
  ]
})
export class ConverterModule { }
