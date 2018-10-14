import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  @Input() ghe:any;
  public DangDat:boolean = false;
  @Output() eventDatGhe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  DatGhe(soGhe:number,tenGhe:number,gia:number,dangDat:boolean)
  {
      if(dangDat)
      {
        //Cập nhật lại thuộc tính DangDat để binding lại ngClass
        this.DangDat = false;
      }else
      {
        this.DangDat = true;
      }
      //Đẩy 1 đối tượng ra component chứa nó 
      let ghe = {MaGhe:soGhe,TenGhe:tenGhe,GiaVe:gia,DaDat:this.DangDat};
      //
      // let jSon = JSON.stringify(ghe);  
      this.eventDatGhe.emit(ghe);

  }
}
