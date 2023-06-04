import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public numberId : number = 0;
  public authorId : number = 0;
  public name : string = '';
  public email : string = '';

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.numberId = param['bookId'];
      this.authorId = param['authorId']
    });

    this.route.queryParams.subscribe(queryparam => {
      this.name = queryparam['name'];
      this.email = queryparam['email']
    });
  }

}
