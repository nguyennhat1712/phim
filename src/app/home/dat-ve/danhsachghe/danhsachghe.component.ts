import { Component, OnInit, Input, OnChanges, SimpleChanges,  } from '@angular/core';
import { TransfromDataService } from '../../../services/transfrom-data.service';

@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.css']
})
export class DanhsachgheComponent implements OnInit,OnChanges {

  @Input() gheArray:any[] =[];
  soGheDaChon:number=0;
  soGheConTrong:number = this.gheArray.length;
  constructor(private transfrom: TransfromDataService) { }
  tt=false;
  ngOnInit() {
    
}
 
  public DanhSachGheDuocDat: Array<any> = [];
  public DanhSachGheDat: Array<any> = [];
  public TongTien = 0;
   TinhTongTien() {
      let tt = 0;
      for(let gheDuocDat of this.DanhSachGheDuocDat)
      {
          tt+=gheDuocDat.GiaVe;
      }
      this.TongTien=tt;
  }
  ngOnChanges(changes:SimpleChanges){
    this.soGheConTrong = this.gheArray.length;
  }
  DatGhe(gheDangDat:any)
  {
    let ve:{MaGhe:string,GiaVe:number}={
      MaGhe:gheDangDat.MaGhe,
      GiaVe:gheDangDat.GiaVe
    }

    //Duyệt trong mảng DanhSachGheDuocDat có ghế đó chưa
    let i=0;
    let flag:boolean = false;
    for(let ghe of this.DanhSachGheDuocDat)
    {
        if(gheDangDat.MaGhe === ghe.MaGhe)
        {
            if(gheDangDat.DaDat === false)
            {
                this.DanhSachGheDuocDat.splice(i,1);
                this.DanhSachGheDat.splice(i,1);
            } 
            flag = true;
        }
        i++;
    }
    if( flag == false)
    {
      this.DanhSachGheDuocDat.push(ve);
      this.DanhSachGheDat.push(gheDangDat);
    }
    //Tính lại tổng tiền sau mỗi lần đặt
    this.TinhTongTien();
    this.transfrom.transformData(this.DanhSachGheDuocDat);
    }
    // localStorage.setItem("abc",JSON.stringify(this.DanhSachGheDuocDat));

  
}
