import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {DemoNgZorroAntdModule} from './demo-ng-zorro-antd/demo-ng-zorro-antd.module';
import { LoginComponent } from './components/login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list' ;
import {MatCardModule} from '@angular/material/card' ;
import {MatIconModule} from '@angular/material/icon' ;
import {MatToolbarModule} from '@angular/material/toolbar' ;


import {MatChipsModule} from '@angular/material/chips';
import { WelcomeComponent } from './components/welcome/welcome.component'




registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule ,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule

      ],

      exports: [
        FormsModule,
        ReactiveFormsModule
      ] ,
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
