import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { MessageComponent } from './message/message.component';

const routeConfig: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    HomeComponent,
    BannerComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
