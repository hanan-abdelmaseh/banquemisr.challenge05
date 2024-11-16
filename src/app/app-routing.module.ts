import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CurrencyDetailsComponent } from './converter/components/currency-details/currency-details.component';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'details' , component:CurrencyDetailsComponent},
  { path: 'converter', loadChildren: () => import('./converter/converter.module').then(m => m.ConverterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
