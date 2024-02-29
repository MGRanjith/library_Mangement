import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input()
  all:number=0;
 
  @Input()
  instock:number=0
 
  @Input()
  outofstock:number=0
 
  @Output()
  selectedfilterRadiobuttonchanged:EventEmitter<string>=new EventEmitter<string>();
  selectedfilterRadiobutton:string='all'

 
  onSelectedfilterRadiobuttonchanged(){
   this.selectedfilterRadiobuttonchanged.emit(this.selectedfilterRadiobutton)
  }

  constructor(private appservice:CommonService){
  console.log(this.totalproductInstock)
  }

  totalproductInstock=this.appservice.courses.filter(p=>p.inventory===true).values
  totalproductoutofstock=this.appservice.courses.filter(p=>p.inventory===false).values
}