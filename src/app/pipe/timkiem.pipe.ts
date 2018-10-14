import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie'
@Pipe({
  name: 'timkiem',
  pure: false
})
export class TimkiemPipe implements PipeTransform {
  transform(items: any[],value:string, search: string): any[] {
    if  (!items) {return []; }
    if  (!value) {return items; }
    if(value==''||value==null) return [];
    return items.filter(e => e[search].toLowerCase().indexOf(value) > -1 );
    
   
}

}
