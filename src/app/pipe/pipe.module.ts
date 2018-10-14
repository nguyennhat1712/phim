import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { TimkiemPipe } from './timkiem.pipe';
import { LetterBoldPipe } from './letter-bold.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SafePipe, TimkiemPipe, LetterBoldPipe],
  exports: [SafePipe,TimkiemPipe,LetterBoldPipe]
})
export class PipeModule { }
