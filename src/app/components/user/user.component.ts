import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() {
  }

  @Input()
  user: User;

  @Output()
  bubbleUpUser = new EventEmitter();


  ngOnInit(): void {
  }

  getUserPosts(user: User): void {
    this.bubbleUpUser.emit(user);
  }

}
