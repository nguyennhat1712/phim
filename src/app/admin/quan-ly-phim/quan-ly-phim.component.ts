import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { Subscription } from 'rxjs';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
  MaN = "GP01";
  MaLoaiDG = 5;
  MaP = 1;
  filetoUpLoad: File = null;
  changeimg = false;
  private phimCapNhat: Movie;
  private dsPhim: Array<Movie>;
  private subService: Subscription;

  constructor(private servicePhim: MovieService, private modalService: NgbModal, private router :Router) {


  }

  chonfile(file: FileList) {
    this.filetoUpLoad = file.item(0);
    this.changeimg = true;
  }
  ThemPhim(phim: Movie) {
    if (this.changeimg) {
      this.servicePhim.ThemPhim(phim).subscribe(
        (kq) => {
          this.servicePhim.UploadFile(phim.TenPhim, this.filetoUpLoad).subscribe(
            (kq1) => {
              swal("ok!", "Thêm thành công!", "success");
              this.LayDSPhim();
            })
          this.changeimg = false;
        })

    }
    else {
      this.servicePhim.ThemPhim(phim).subscribe(
        (kq) => {
          swal("ok!", "Thêm thành công!", "success");
          this.LayDSPhim();

        })

    }
  }
  CapNhatPhim(phim: Movie) {


    if (this.changeimg) {
      this.servicePhim.CapNhatPhim(phim).subscribe(
        (kq) => {
          this.servicePhim.UploadFile(phim.TenPhim, this.filetoUpLoad).subscribe(
            (kq1) => {
              swal("ok!", "Cập nhật thành công!", "success");
              this.LayDSPhim();
            })
          this.changeimg = false;
        })

    }
    else {
      this.servicePhim.CapNhatPhim(phim).subscribe(
        (kq) => {
          swal("ok!", "Cập nhật thành công!", "success");
          this.LayDSPhim();

        })

    }
  }
  openVerticallyCentered(content, param) {

    this.modalService.open(content);

  }
  openVerticallyCenteredCapNhat(content, param) {
    this.ChiTietPhim(param);
    this.modalService.open(content);

  }
  LayDSPhim() {
    this.subService = this.servicePhim.LayDanhSachPhim()
      .subscribe((result: Array<Movie>) => {
        this.dsPhim = result;
      });
  }
  ngOnInit() {
    this.LayDSPhim();
  }
   

  

  ChiTietPhim(id) {
    this.servicePhim.LayChiTietPhim(id)
      .subscribe((result: Movie) => {
        this.phimCapNhat = result;
        this.MaLoaiDG = this.phimCapNhat.DanhGia;
      });

  }
  btnXoaPhim(idphim) {
    this.subService = this.servicePhim.XoaPhim(idphim)
      .subscribe((kq) => {
        swal("ok!", "Xóa thành công!", "success");
        this.LayDSPhim();
      });
  }
  ngOnDestroy() {
    this.subService.unsubscribe();
  }
}
