import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  newPost: Post = {
    id: 1,
    title: 'Title',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, ut! Beatae, temporibus suscipit? Animi saepe voluptatem quisquam dolor quam voluptas sit, nostrum consequuntur recusandae cumque perspiciatis atque veniam harum nulla! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, ut! Beatae, temporibus suscipit? Animi saepe voluptatem quisquam dolor quam voluptas sit, nostrum consequuntur recusandae cumque perspiciatis atque veniam harum nulla!',
    userId: 1
  }

  constructor() {
  }

  ngOnInit(): void {
    this.posts.push(this.newPost);
  }

}
