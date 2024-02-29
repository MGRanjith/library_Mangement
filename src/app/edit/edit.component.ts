import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private service: CommonService, private route: ActivatedRoute, private router: Router) { }


  course: { id: number; name: string; author: string; duration: number; type: string; price: number; ratings: number; image: string; description: string; } = {
    id: 0,
    name: '',
    author: '',
    duration: 0,
    type: '',
    price: 0,
    ratings: 0,
    image: '',
    description: '',
  };
  // | undefined = undefined;
  courseId: any;
  routeParamObs: any;
  editMode: boolean = false;

  ngOnInit(): void {


    this.routeParamObs = this.route.paramMap.subscribe((par) => {
      this.courseId = par.get('id');
      const foundCourse = this.service.courses.find(x => x.id == this.courseId);
      if (foundCourse) {
        this.course = foundCourse;
      } else {
        // Handle the case where the course with the specified ID is not found
        // You can set this.course to a default value or display an error message
      }
    });

    //  // <!-- Retrieve the Query parameter using Snapshot  -->
    // this.editMode = Boolean(this.route.snapshot.queryParamMap.get('edit'));
    // console.log(this.editMode);

    // <!-- Retrieve the Query parameter using Observables  -->

    this.route.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get('edit'));
    });

}
appendQueryParam(){
  this.editMode=true
}
}
