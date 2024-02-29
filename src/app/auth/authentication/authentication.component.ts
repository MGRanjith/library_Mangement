import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthResponseData, AuthService } from '../auth.service';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  selectedRole:string='user'

  constructor(private authService: AuthService, private router: Router, private com:CommonService) {}
  ngOnInit(){
    
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log(form);
    
    const email = form.value.email;
    const password = form.value.password;
    this.com.role=form.value.selectedRole
    console.log(this.com.role);
    console.log(this.selectedRole);
    
    
    
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
      
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/dash']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }

}
