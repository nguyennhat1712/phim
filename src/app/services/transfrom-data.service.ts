import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfromDataService {
 private data= new BehaviorSubject(null);
 public adata= this.data.asObservable();
 public ttdata= this.data.asObservable();
  constructor() { }
  public transformData(thamso){
    this.data.next(thamso);
  }
  public transformData2(thamso){
    this.data.next(thamso);
  }

  
}
