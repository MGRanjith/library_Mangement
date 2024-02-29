import { Component, Input } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
export interface Course {
  id: number;
  name: string;
  author: string;
  duration: number;
  type: string;
  price: number;
  ratings: number;
  inventory:boolean
  image: string;
  description: string;
  
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  courses: Course[] = []; 
  roles:any;
  length:number;
  constructor(private course: CommonService,private route:Router) { }
  ngOnInit(): void {
    
    this.courses = this.course.courses ;
    this.roles=this.course.role
    this.length=this.course.courses.length 
  
   
  }
  addtocart(book:Course){
    this.course.limitation(book)
    console.log("hii");
    // this.course.books.push(book)
    this.route.navigate(['/cart']);
  }

 

 @Input()
  searchText:string=''

selectedFilterRadioButton:string='all'
   
  onFilterChanged(value:string){
    console.log(value)
     this.selectedFilterRadioButton=value
  }

 
  totalproductcount=this.course.courses.length
  totalproductInstock=this.course.courses.filter(p=>p.inventory===true).length
  totalproductoutofstock=this.course.courses.filter(p=>p.inventory===false).length


  
}


