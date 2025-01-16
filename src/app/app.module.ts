

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
// import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { TwTransferComponent } from './component/tw-transfer/tw-transfer.component';
import { BeforeLoginComponent } from './views/before-login/before-login.component';
import { DepositPageComponent } from './views/deposit-page/deposit-page.component';
import { LastestNewsComponent } from './views/lastest-news/lastest-news.component';
import { LoanPageComponent } from './views/loan-page/loan-page.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BeforeLoginComponent,
    DepositPageComponent,
    LoanPageComponent,
    LastestNewsComponent,
    TwTransferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
