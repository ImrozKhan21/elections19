import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materials/materials.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MinistersViewComponent } from './ministers-view/ministers-view.component';
import { MinisterViewComponent } from './minister-view/minister-view.component';

import {MinisterService} from './services/minister.service';
import {GeoLocationService} from './services/geo-location.service';

import { StoreModule } from '@ngrx/store';
import { reducer} from './reducers/home.reducer';

import {HttpClientModule, HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MinistersViewComponent,
    MinisterViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      homeState: reducer
    }),
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [MinisterService, GeoLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
