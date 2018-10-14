import { Component, OnInit } from '@angular/core';
import { TransfromDataService } from '../../services/transfrom-data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NguoiDungService} from '../../services/nguoi-dung.service';
import {  Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  trangthai=false;
  private subService: Subscription;
  private DanhSachVeDaDat:Array<any>;
  constructor(private transfrom:TransfromDataService,private modalService: NgbModal,private router :Router, private nguoidungservice:NguoiDungService) { }

  ngOnInit() {
    let data=JSON.parse(localStorage.getItem('NguoiDungDangNhap'));
    if(data==null){
      
      this.router.navigate(['/home']);
    } else{
      this.subService = this.nguoidungservice.LayLichSuDatVe(data.TaiKhoan)
      .subscribe((result) => {
        this.DanhSachVeDaDat=result.DanhSachVeDaDat;
       
      })
    }
  }
  open(content) {
    this.modalService.open(content);
  }
  

}
