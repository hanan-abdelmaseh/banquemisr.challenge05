import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './converter.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { HistoricalRatesComponent } from './components/historical-rates/historical-rates.component';
import { UsdDetailsComponent } from './components/usd-details/usd-details.component';
import { EurDetailsComponent } from './components/eur-details/eur-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'convert' , pathMatch:'full'},
  { path: 'convert', component: ConverterComponent },
  { path: 'currency-details', component: CurrencyDetailsComponent },
  { path: 'usd-details', component: UsdDetailsComponent },
  { path: 'eur-details', component: EurDetailsComponent },
  {path:'historical-rates', component:HistoricalRatesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterRoutingModule { }
