import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { Routes, RouterModule } from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
const adminRoute: Routes = [
  {
    
    path: '', component: AdminLayoutComponent, children: [
      { path: '', component: AdminindexComponent },
      { path: 'qlphim', component: QuanLyPhimComponent },
      { path: 'qlnguoidung', component: QuanLyNguoiDungComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(adminRoute),NgbModule.forRoot(), ReactiveFormsModule,FormsModule
  ],
  declarations: [QuanLyNguoiDungComponent,
    QuanLyPhimComponent,
   
    AdminLayoutComponent,
    AdminindexComponent]
})
export class AdminModule { }
