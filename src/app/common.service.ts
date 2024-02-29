import { Injectable } from '@angular/core';
import { Course } from './dashboard/dashboard.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
role:any;
books:Course[]=[]
constructor(private route:Router){}
courses = [
  {
    id: 101, 
    name: 'Success',
    author: 'John Heikela',
    duration: 48, 
    type: 'Free',
    price: 0.00, 
    ratings: 3.5,
    image: 'assets/b1.jpg',
    description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
   ,inventory:true
  },
  {
    id: 102,
     name: 'Devil dairy',
     author: 'Mark Vought',
     duration: 28,
     type: 'Free',
     price: 129.00, 
     ratings: 4.5, image: 'assets/OIP.jpeg',
    description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:true
  },
  {
    id: 103, 
    name: 'Hell Fire', 
    author: 'Steve Smith',
    duration: 18.5,
    type: 'Free',
    price: 0.00,
    ratings: 4.0, 
    image: 'assets/OIP (1).jpeg',
    description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:true  
  },
  {
    id: 104, 
    name: 'Life of Lie',
    author: 'Steve Smith',
    duration: 19.5, 
    type: 'Free',
    price: 145.50, 
    ratings: 4.8,
    image: 'assets/OIP (2).jpeg',
    description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:false
  },
  {
    id: 105, 
    name: 'Always Pain',
    author: 'John Heikela', 
    duration: 60,
    type: 'Free',
    price: 150.00,
    ratings: 4.5,
    image: 'assets/OIP (3).jpeg',
    description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:false
  },
  {
    id: 106,
    name: 'Tears into oceans',
    author: 'Mark Vought', 
    duration: 68,
    type: 'Free',
    price: 129.00,
    ratings: 4.5,
    image: 'assets/OIP (4).jpeg',
    description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:false
  },
  {
    id: 107,
    name: 'Cats becomes a tiger',
    author: 'Merry Smith',
    duration: 18.5,
    type: 'Free',
    price: 0.00, 
    ratings: 4.0,
    image: 'assets/OIP (5).jpeg',
    description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:true
  },
  {
    id: 108, 
    name: 'Romeo & Juliet',
    author: 'Steve Smith',
    duration: 19.0, 
    type: 'Free',
    price: 115.50,
    ratings: 4.8, image: 'assets/OIP (6).jpeg',
    description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:true},
  {
    id: 107,
     name: 'Cats becomes a tiger',
     author: 'Merry Smith',
     duration: 18.5,
     type: 'Free',
     price: 0.00, 
     ratings: 4.0,
     image: 'assets/OIP (5).jpeg',
     description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:true
  },
  {
    id: 109,
     name: 'Life of Wale',
     author: 'Steve Smith',
     duration: 20.0,
     type: 'Free',
     price: 115.50, 
     ratings: 4.8,
     image: 'assets/OIP (1).jpeg',
     description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
    ,inventory:true},
    {
      id: 110,
      name: 'Cats becomes a tiger',
      author: 'Merry Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.00, 
      ratings: 4.0,
      image: 'assets/OIP (5).jpeg',
      description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
      ,inventory:true
    },
    {
      id: 111, 
      name: 'Hell Fire', 
      author: 'Steve Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.00,
      ratings: 4.0, 
      image: 'assets/OIP (1).jpeg',
      description: 'For a young lawyer on the make, it was an offer Mitch McDeere couldn’t refuse: a position at a law firm where the bucks, billable hours, and benefits are over the top'
      ,inventory:true  
    },
]
limitation(book:Course){
  if(this.books.length===5){
    alert("You Have Reached The Maximum Limit")
  
  }
  else{
    this.books.push(book)
   const index= this.courses.findIndex(obj => obj.id === book.id);
    if (index !== -1) {
      this.courses.splice(index, 1);
  }
}
} 
return(book:Course){
  this.courses.push(book)
  const ind= this.books.findIndex(obj => obj.id === book.id);
    if (ind !== -1) {
      console.log(ind);
      
      this.books.splice(ind, 1);
  }
  if(this.books.length===0){
    this.route.navigate[('/dash')]
  }
}

totalproductcount=this.courses.length 
  totalproductInstock=this.courses.filter(p=>p.inventory===true).length
  totalproductoutofstock=this.courses.filter(p=>p.inventory===false).length
}
