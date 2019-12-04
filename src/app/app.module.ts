import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { InformationComponent } from './components/content/information/information.component';
import { ErrorComponent } from './components/content/error/error.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {WeatherService} from './services/weather.service';
import {FormsModule} from '@angular/forms';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    InformationComponent,
    ErrorComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
