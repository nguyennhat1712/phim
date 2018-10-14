import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';
import { Subscription } from 'rxjs';
import { NgxCarousel } from 'ngx-carousel';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransfromDataService } from '../../services/transfrom-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit, OnDestroy {
  // private urlHost = 'http://sv.myclass.vn/Images/Movies/';
  stateForm: FormGroup;
  macdinh;
  idparam=1;
  trangthai = false;
  showDropDown = false;
  private dsPhim: Array<Movie>;
  statusSearch = false;
  private TrailerPhim: string;
  closeResult: string;
  private subService: Subscription;
  public Config: NgxCarousel;
  constructor(private transfrom: TransfromDataService,private router :Router, private servicePhim: MovieService, private modalService: NgbModal, private sanitizer: DomSanitizer, private fb: FormBuilder) {

    this.Config = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      slide: 1,
      speed: 400,
      interval: 10000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            display: none;
          }`
      },
      loop: true,
      touch: true
    }
    this.initForm()
    
  }
  TimPhim(deviceValue) {
    this.idparam = deviceValue;
  }
  openVerticallyCentered(content, param) {
    let phimTrailer = param;
    phimTrailer = phimTrailer.split('watch?v=');
    this.TrailerPhim = phimTrailer[0] + "embed/" + phimTrailer[1];
    this.modalService.open(content, { centered: true, size: 'lg' });

  }
  ngOnInit() {
    this.subService = this.servicePhim.LayDanhSachPhim()
      .subscribe((result: Array<Movie>) => {
        this.dsPhim = result;
      })
  }
  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }
  
  ngOnDestroy() {
    
    this.subService.unsubscribe();
  }

}
