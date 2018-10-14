import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Movie } from '../models/movie';
import {vexemphim} from '../models/ve';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiTaoPhimUrl = `http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`
  constructor(private http: Http) { }
  public LayDanhSachPhim(): Observable<any[]> {
    // const apiLayDanhSachPhim = 
    // `http://sv.myclass.vn/api/movie/getmovie`;

    const apiLayDanhSachPhim = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01`;

    let obServe: Observable<any[]> =
      this.http.get(apiLayDanhSachPhim)
        .map((result: Response) => result.json());
    return obServe;
  }
  public LayChiTietPhim(id: any): Observable<any> {
    const apiLayChiTietPhim =
      `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${id}`;
    let obServe: Observable<any[]> =
      this.http.get(apiLayChiTietPhim)
        .map((result: Response) => result.json());
    return obServe;
  }
  public LayChiTietPhimTheoNhom(id: any, groupID: any): Observable<any> {
    const apiLayChiTietPhim =
      `http://sv.myclass.vn/api/movie/getmoviedetailbygroup?id=${id}&groupid=${groupID}`;
    let obServe: Observable<any[]> =
      this.http.get(apiLayChiTietPhim)
        .map((result: Response) => result.json());
    return obServe;
  }
  public LayDanhSachGhe(ShowTimeID: number): Observable<any> {
    const apiLayDanhSachGhe = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${ShowTimeID}`;
    let obServe: Observable<any[]> = this.http.get(apiLayDanhSachGhe).map((result: Response) => result.json());
    return obServe;
  }
  public ThemPhim(phim: Movie): Observable<any> {
    let header = new Headers();
    header.append('Content-Type', 'application/json; charset=UTF-8');

    var obServe = this.http.post(this.apiTaoPhimUrl, phim, { headers: header }).map((result: Response) => result.json());
    return obServe;
  }
  public XoaPhim(id: any): Observable<any> {
    const apiXoaPhim =
      `http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`;
    let header = new Headers();
    header.append('Content-Type', 'application/json; charset=UTF-8');
    var obServe = this.http.delete(apiXoaPhim, { headers: header }).map((result: Response) => result.json());
    return obServe;
  }
  public CapNhatPhim(phim: Movie): Observable<any> {
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    let header = new Headers();
    header.append('Content-Type', 'application/json; charset=UTF-8');
    var obServe = this.http.post(url, phim, { headers: header }).map((result: Response) => result.json());
    return obServe;
  }
  public UploadFile(tenphim: string, file: File): Observable<any> {
    let url = `http://sv2.myclass.vn/api/QuanLyPhim/UploadFile`;
    let header = new Headers();
    header.append('Content-Type', 'application/json; charset=UTF-8');
    var formData = new FormData();
    formData.append("Files", file)
    formData.append("TenPhim", tenphim)
    var obServe = this.http.post(url, formData).map((result: Response) => result.json());
    return obServe;
  }
  public DatVe(ve:vexemphim):Observable<any>{
    let url = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let header = new Headers();
    header.append('Content-Type','application/json; charset=UTF-8');
    let obServe=this.http.post(url,ve,{headers:header}).map((result:Response)=>result.json());
    return obServe;
  }
}
