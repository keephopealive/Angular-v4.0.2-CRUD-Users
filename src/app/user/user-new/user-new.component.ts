import { User } from './../user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  newUser = new User();
  @Output() createNewUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  create(){
    // call server to save
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }

}
