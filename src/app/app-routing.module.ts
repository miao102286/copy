import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositPageComponent } from './views/deposit-page/deposit-page.component';
import { LoanPageComponent } from './views/loan-page/loan-page.component';
import { BeforeLoginComponent } from './views/before-login/before-login.component';
import { LastestNewsComponent } from './views/lastest-news/lastest-news.component';
const routes: Routes = [
  { path: 'before-login', component: BeforeLoginComponent },
  { path: 'latest-news', component: LastestNewsComponent },
  { path: 'deposit', component: DepositPageComponent },
  { path: 'loan', component: LoanPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
