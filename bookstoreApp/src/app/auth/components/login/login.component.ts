import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router){}
  ngOnInit(): void {}

  goToSignup(): void{
    this.router.navigate(['/auth/signup']);
  }

  goToBookDetails(): void{
    this.router.navigate(['/public/book-details',10,'author',300]);
  }

  goToBookDetailss(id:number,authorId:number): void{
    this.router.navigate(['/public/book-details',id,'author',authorId], {
      queryParams: {name : 'BharathKumar', email:'sample@gmail.com'}
    });
  }
}
