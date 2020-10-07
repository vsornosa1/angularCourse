import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts;
  showSubmittedPost;
  postData = {
    id: null,
    userId: 20,
    title: "",
    body: ""
  };


  constructor(private http:HttpClient) {
    let params = new HttpParams().set("userId", "8");
    this.http
    .get("https://jsonplaceholder.typicode.com/posts", { params })
    .subscribe((value:any) => {
      this.posts = value;      
      console.log(this.posts);
    });
  }


  submitPost() {
    this.http
    .post("https://jsonplaceholder.typicode.com/posts", this.postData)
    .subscribe((value:any) => {
      this.showSubmittedPost = value;
      console.log(this.posts);
    });
  }
}
