import {Component, OnInit} from '@angular/core';
import {Post} from '../models/Post';
import {User} from '../models/User';
import {PostService} from '../services/post.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  posts: Post[];
  users: User[];
  userPost: Post[];

  constructor(private userService: UserService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(value => this.posts = value);
    this.userService.getAllUser().subscribe(value => this.users = value);
  }

  getBubbleUser(user: User): void {
    this.userPost = this.posts.filter(value => value.userId === user.id);
    console.log(this.userPost);
  }
}
