import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.css']
})
export class UsersdetailsComponent  implements OnInit {
  users: any[];

  constructor(private userService: AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.fetchAllUsers();
  // }

  // fetchAllUsers(): void {
  //   this.userService.getAllUsers().subscribe(
  //     (data) => {
  //       // Convert the response data to an array
  //       this.users = Object.values(data);
  //     },
  //     (error) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  // }
}
