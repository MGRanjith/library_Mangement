import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Course } from '../dashboard/dashboard.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {


  authForm: NgForm;

  constructor(
    private service: CommonService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }


  course: { id: number; name: string; author: string; duration: number; type: string; price: number; ratings: number; image: string; description: string;  inventory:boolean} = {
    id: 0,
    name: '',
    author: '',
    duration: 0,
    type: '',
    price: 0,
    ratings: 0,
    image: '',
    description: '',
    inventory:true
  };
  onSubmit(form: NgForm) {
    console.log(form.value.id);

    this.course.id = form.value.id
    this.course.name = form.value.name
    this.course.author = form.value.author
    this.course.duration = form.value.duration
    this.course.type = form.value.type
    this.course.price = form.value.price
    this.course.ratings = form.value.ratings
    this.course.image = form.value.image
    this.course.description = form.value.description
    console.log(this.course);
    this.service.courses.push(this.course)
    form.reset()
    this.router.navigate(['/dash'])
  }




}
