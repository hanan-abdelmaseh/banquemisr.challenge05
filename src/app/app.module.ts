import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { GlobalInterceptor } from './core/interceptors/global.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ {
    provide :HTTP_INTERCEPTORS ,
    useClass:GlobalInterceptor ,
    multi:true // to use other interceptors 
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
