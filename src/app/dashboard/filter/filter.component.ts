import { Component } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(private course:CommonService){
    
  }
}
