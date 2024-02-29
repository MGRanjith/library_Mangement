import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Course } from '../dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class CartComponent {
  courses:Course[];
  length:number;
 
constructor(private course:CommonService,private route:Router){}
ngOnInit(){
  this.courses=this.course.books
this.length=this.course.books.length
}
ngDoCheck(){
  // console.log("hii");
  this.length=this.course.books.length
  
  
}
addtocart(book:Course){
this.course.return(book)
if(this.course.books.length===0){
  this.route.navigate['/dash']
}
}
}
