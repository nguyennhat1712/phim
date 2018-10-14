import { Component, OnInit } from '@angular/core';
import { TransfromDataService } from '../../services/transfrom-data.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',

  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  constructor( private transfrom:TransfromDataService) {
    
   }
  
  ngOnInit() {
  }

  
  
}
