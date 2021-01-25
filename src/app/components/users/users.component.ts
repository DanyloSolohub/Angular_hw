import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {Posts} from '../../models/Posts';
import {UserService} from '../services/user.service';
import {PostService} from '../services/post.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  posts: Posts[];
  userPost: Posts[];

  constructor(private userService: UserService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);
    this.postService.getAllPosts().subscribe(value => this.posts = value);

  }

  getBubbleUser(user: User): void {
    this.userPost = this.posts.filter(value => value.userId === user.id);
    console.log(this.userPost);
  }
}
