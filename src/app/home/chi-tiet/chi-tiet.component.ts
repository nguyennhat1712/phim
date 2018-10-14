import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.css']
})
export class ChiTietComponent implements OnInit, OnDestroy {
  // private urlHost = 'http://sv.myclass.vn/Images/Movies/';
  private id: number;
  private subParams: Subscription;
  private subService: Subscription;
  private phim: Movie = new Movie();
  constructor(private activeRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    //Đối tượng activatedRoute dùng để lấy tham số từ URL
    // this.subParams = this.activeRoute.params.subscribe(
    //   thamso => {
    //     this.id = thamso.id;

    //   }
    // )
    this.subParams = this.activeRoute.queryParams.subscribe(
      thamso => {
        this.id = thamso.id;

      });
    // this.subService = this.movieService.LayChiTietPhim(this.id)
    // .subscribe((result:Movie)=>{
    //     this.phim = result;
    //     console.log(this.phim);
    // });
    this.subService = this.movieService.LayChiTietPhim(this.id)
      .subscribe((result: Movie) => {
        this.phim = result;
      });

  }
 
  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
