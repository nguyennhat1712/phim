import { Component, OnInit } from '@angular/core';
import { TransfromDataService } from '../../../services/transfrom-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
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
  toggleNavbar() {
    
    this.navbarOpen = !this.navbarOpen;
  }
}
