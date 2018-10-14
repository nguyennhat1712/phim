import { Injectable } from '@angular/core';
import {Http,Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {NguoiDung} from '../models/NguoiDung';
@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  // api Tạo Tài Khoản
  
  constructor(private http:Http) { }
  public LayDanhSachNguoiDung():Observable<any[]>
  {
    // Lấy danh sách người dùng
    const apiLayDanhSachNguoiDung = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;

    let obServe:Observable<any[]> =
    this.http.get(apiLayDanhSachNguoiDung)
    .map((result:Response)=>result.json());
    return obServe;
  } 
  public LayDanhSachLoaiNguoiDung():Observable<any[]>
  {
    // Lấy danh sách người dùng
    const apiLayDanhSachLoaiNguoiDung = `http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`;
    let obServe:Observable<any[]> =
    this.http.get(apiLayDanhSachLoaiNguoiDung)
    .map((result:Response)=>result.json());
    return obServe;
  } 
  public DangNhapSV(taikhoan,matkhau):Observable<any>
  {
    // Lấy danh sách người dùng
    let apiDangnhap = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`;
    let header = new Headers();
    header.append('Content-Type','application/json; charset=UTF-8');
    let obServe=this.http.post(apiDangnhap,{headers:header}).map((result:Response)=>result.json());
    return obServe;
  } 
  public ThemNguoiDung(nguoidung:NguoiDung):Observable<any>{
    let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let header = new Headers();
    header.append('Content-Type','application/json; charset=UTF-8');
    // let body = `data=${JSON.stringify(nguoidung)}`;
    let obServe=this.http.post(url,nguoidung,{headers:header}).map((result:Response)=>result.json());
    return obServe;
    
  }
  public LayLichSuDatVe(id:string):Observable<any>{
    let url =`http://sv2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${id}`;
    let header = new Headers();
    header.append('Content-Type','application/json; charset=UTF-8');
    let obServe=this.http.post(url,{headers:header}).map((result:Response)=>result.json());
    return obServe;
  }
  public XoaTK(id: any): Observable<any> {
    const apiXoaPhim =
      `http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`;
    let header = new Headers();
    header.append('Content-Type', 'application/json; charset=UTF-8');
    var obServe = this.http.delete(apiXoaPhim, { headers: header }).map((result: Response) => result.json());
    return obServe;
  }
  public CapNhatTK(taikhoan: NguoiDung): Observable<any> {
    let url = `http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    let header = new Headers();
    header.append('Content-Type', 'application/json; charset=UTF-8');
    var obServe = this.http.post(url, taikhoan, { headers: header }).map((result: Response) => result.json());
    return obServe;
  }

}
