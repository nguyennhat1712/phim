import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { HttpModule } from '@angular/http';
import swal from 'sweetalert';

//Quản lý đường dẫn
const appRoute:Routes = [
  //Khi người dùng chỉ gõ domain mà không / gì cả load homemodule
  {path:'',loadChildren: () => HomeModule},
  {path:'home', loadChildren: () => HomeModule},
  {path:'admin', loadChildren:() => AdminModule}

];

@NgModule({
  declarations:[AppComponent],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoute),HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
