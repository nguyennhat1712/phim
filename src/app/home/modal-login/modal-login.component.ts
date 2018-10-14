import {Component, ViewEncapsulation} from '@angular/core';
import {NguoiDungService} from '../../services/nguoi-dung.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { NguoiDung } from '../../models/NguoiDung';
import {  Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TransfromDataService } from '../../services/transfrom-data.service';
@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalLoginComponent implements OnInit{
  MaLoaiND= "KhachHang";
  MaN="GP01";
  trangthai;
  isChange=true;
  closeResult: string;
  private subService : Subscription;
  private tk:NguoiDung;
  constructor(private modalService: NgbModal, private nguoidungservice:NguoiDungService, private router :Router,private transfrom:TransfromDataService) {}

  openVerticallyCentered(content) {
    this.modalService.open(content, {centered: true });
  }
  DangKy(nguoidung:NguoiDung){
  this.nguoidungservice.ThemNguoiDung(nguoidung).subscribe(
     (kq:any)=>{
      swal("ok!", "Thêm thành công!", "success");
     }
   )
  console.log(nguoidung);
  }
  DangNhap(value){
    
    this.nguoidungservice.DangNhapSV(value.TaiKhoan,value.MatKhau).subscribe(
      (kq:any) =>{
        if(typeof(kq)=="object"){
          localStorage.setItem('NguoiDungDangNhap',JSON.stringify(kq));
          this.trangthai=true;
          this.transfrom.transformData(this.trangthai);
          swal("ok!", "Đăng Nhập thành công!", "success");
          this.router.navigate(['/home']);
        }
        else{
          alert('Vui lòng nhập lại!!!!!!!!!');
          this.trangthai=false;
        }
      },
      (error:any)=>{
        console.log(error);
      }
  )
  }
  DangXuat(){
    localStorage.clear();
    this.trangthai=false;
    this.transfrom.transformData(this.trangthai);
    this.router.navigate(['/home']);
  }
  ngOnInit(){
    let data=JSON.parse(localStorage.getItem('NguoiDungDangNhap'));
    if(data==null){
      this.trangthai=false;
    } else{
      this.trangthai=true;
    }
  }
}
