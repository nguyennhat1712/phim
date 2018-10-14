import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private router:Router) { }
  navbarOpen=false;
  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('NguoiDungDangNhap'));
    console.log(data);
    if (data == null) {
      this.router.navigate(['/']);
      swal("Thấy bại!", "Bạn Cần Phải Đăng Nhập", "warning");
      } 
    }
    DangXuat(){
      localStorage.clear();
      this.router.navigate(['/home']);
    }
    toggleNavbar() {
    
      this.navbarOpen = !this.navbarOpen;
    }
}
