import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './user/user.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent
    },
      {
        path: 'link/users', component: UsersComponent, children: [{
          path: ':id', component: PostComponent
        }]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
