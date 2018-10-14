import { Component, OnInit } from '@angular/core';
import { TransfromDataService } from '../../../services/transfrom-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  islogin=false;
  constructor( private transfrom:TransfromDataService) { }

  ngOnInit() {
    let data=JSON.parse(localStorage.getItem('NguoiDungDangNhap'));
    if(data==null){
      this.islogin=false;
    } else{
      this.islogin=true;
    }
  }

}
