import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { Subscription, empty } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { TransfromDataService } from '../../services/transfrom-data.service';
import {vexemphim} from '../../models/ve';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.css']
})
export class DatVeComponent implements OnInit,OnDestroy {
  trangthai=false;
  private ShowTimeID:number;
  private dsChoNgoi:Array<any>=new Array<any>();
  private ve:vexemphim=new vexemphim();
  dadatve=false;
  private DanhSachGheNgoi:Array<any>=[];
  private subParam:Subscription;
  private subService:Subscription;
  constructor(private routes:ActivatedRoute,private movieService:MovieService,private router:Router,private transfrom:TransfromDataService) { }

  ngOnInit() {
    
    this.subParam=this.routes.queryParams.subscribe(thamso=>{
      this.ShowTimeID=thamso.MaLichChieu;
      this.ve.MaLichChieu=thamso.MaLichChieu;
    });
    this.subService= this.movieService.LayDanhSachGhe(this.ShowTimeID).subscribe(
      (result)=>{
        this.DanhSachGheNgoi=result.DanhSachGhe;
    });
    this.transfrom.adata.subscribe(
      (kq)=>{
        this.dsChoNgoi=kq;
      if(this.dsChoNgoi!=null && this.dsChoNgoi.length>0){
        this.dadatve=true;
      } else {
       this.dadatve=false;
      }
    }
    )
    
    
  }
  DatVeXem(){
    let data = JSON.parse(localStorage.getItem('NguoiDungDangNhap'));
    console.log(data);
    if (data !== null) {
     this.ve.DanhSachVe=this.dsChoNgoi;
     this.ve.TaiKhoanNguoiDung=data.TaiKhoan;
     this.movieService.DatVe(this.ve).subscribe(
      (kq:any)=>{
       swal("ok!", "Đặt vé thành công!", "success");
       this.router.navigate(['/home']);
      }
    )     
  } else {
    swal("Thấy bại!", "Bạn Cần Phải Đăng Nhập", "warning");
  }
    

  }
 
  ngOnDestroy(){
   
  }
}
