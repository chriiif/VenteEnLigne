import { Component } from '@angular/core';
import { PubService } from 'src/app/services/pub.service';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.css']
})
export class PubComponent {
  books: any[] = [];

  constructor(private bookService: PubService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bookService.getBooks().subscribe(
      (data: any) => {
        this.books = data.items;
      },
      error => {
        console.log(error);
      }
    );
  }
}
