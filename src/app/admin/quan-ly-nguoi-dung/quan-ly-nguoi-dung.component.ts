import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from '../../services/nguoi-dung.service';
import { NguoiDung } from '../../models/NguoiDung';
import { Subscription } from 'rxjs';
import {LoaiNguoiDung} from '../../models/LoaiNguoiDung';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert';
@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {

  MaN="GP01";
  private dsTaiKhoan:Array<NguoiDung>;
  private taiKhoan:NguoiDung;
  private subService:Subscription;
  private dsLoai:Array<LoaiNguoiDung>;
  constructor(private serviceNguoiDung:NguoiDungService,private modalService: NgbModal) { 

    
  }
  DangKy(value:NguoiDung){
  
    this.serviceNguoiDung.ThemNguoiDung(value).subscribe(
      (kq:any)=>{
       swal("ok!", "Thêm thành công!", "success");
        this.LayDSTK();
      });
  }
  CapNhat(value:NguoiDung){
    this.serviceNguoiDung.CapNhatTK(value).subscribe(
      (kq:any)=>{
 
       swal("ok!", "Cập Nhật thành công!", "success");
      //  this.LayDSTK();
      });
  }
  btnXoaTK(id){
    this.subService = this.serviceNguoiDung.XoaTK(id)
      .subscribe((kq) => {
        swal("ok!", "Xóa thành công!", "success");
        this.LayDSTK();
      });
  }
  openThem(content) {
    this.modalService.open(content);
  }
  openCapNhat(content,param:NguoiDung) {
    this.taiKhoan=param;
    this.modalService.open(content);
  }
  ngOnInit(){
    this.subService = this.serviceNguoiDung.LayDanhSachNguoiDung()
    .subscribe((result:Array<NguoiDung>) => {
      this.dsTaiKhoan = result;
    });
    this.subService = this.serviceNguoiDung.LayDanhSachLoaiNguoiDung()
    .subscribe((result:Array<any>) => {
      this.dsLoai = result;
    })
  }
  LayDSTK() {
    this.subService = this.serviceNguoiDung.LayDanhSachNguoiDung()
    .subscribe((result:Array<NguoiDung>) => {
      this.dsTaiKhoan = result;
    });
  }
  ngOnDestroy(){
    this.subService.unsubscribe();
  }

}
