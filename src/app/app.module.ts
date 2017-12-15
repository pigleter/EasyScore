import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { MessageComponent } from './message/message.component';
import { MenuComponent } from './menu/menu.component';
import { GradeAdminComponent } from './grade-admin/grade-admin.component';
import { ClassAdminComponent } from './class-admin/class-admin.component';
import { StudentAdminComponent } from './student-admin/student-admin.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

const routeConfig: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'gradeadmin', component: GradeAdminComponent},
      {path: 'classadmin', component: ClassAdminComponent},
      {path: 'studentadmin', component: StudentAdminComponent}
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,
    MessageComponent,
    MenuComponent,
    GradeAdminComponent,
    ClassAdminComponent,
    StudentAdminComponent,
    ToolBarComponent
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
