import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { DatVeComponent } from './dat-ve/dat-ve.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
//phân trang module
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { GheComponent } from './dat-ve/ghe/ghe.component';
import { DanhsachgheComponent } from './dat-ve/danhsachghe/danhsachghe.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { CarouseHomeComponent } from './carouse-home/carouse-home.component';
import {PipeModule} from '../pipe/pipe.module';
import { InfoUserComponent } from './info-user/info-user.component';
import { HeaderComponent } from './home-layout/header/header.component';
import { FooterComponent } from './home-layout/footer/footer.component';

const homeRoute:Routes = [
  {path:'',component:HomeLayoutComponent,children:[
    {path:'',component:TrangChuComponent},
    {path:'trangchu',component:TrangChuComponent},
    //Truyền 1 tham số
    // {path:'chitiet/:id',component:ChiTietComponent}
    {path:'chitiet',component:ChiTietComponent},
    {path:'datve',component:DatVeComponent}
  ]}
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(homeRoute),NgxPaginationModule,NgbModule.forRoot(),FormsModule,NgxCarouselModule,CarouselModule.forRoot(),ReactiveFormsModule,PipeModule
  ],

  declarations: [TrangChuComponent, ChiTietComponent, DatVeComponent, HomeLayoutComponent, GheComponent, DanhsachgheComponent, ModalLoginComponent, CarouseHomeComponent, InfoUserComponent, HeaderComponent, FooterComponent,]
})
export class HomeModule { }
