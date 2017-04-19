import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    new User(1,"First","Last","email@email.com"),
    new User(2,"First","Last","email@email.com"),
    new User(3,"First","Last","email@email.com")
  ];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }

  create(user: User){
    this.users.push(user);
  }

  destroy(user: User){
    const i = this.users.indexOf(user);
    this.users.splice(i, 1);
  }

  update(users: any){
    console.log(users);
    const i = this.users.indexOf(users.original)
    this.users[i] = users.edited;
  }

  getUsers(){
    // this._userService.getUsers()
    // .then(users => this.users = users)
  }

}
