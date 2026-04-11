import { Component } from '@angular/core';

interface Kurs{
  telegramname: string
  authorname: string
  price: number
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  myname: string = "Work4App"
  sport: string[] = []
  books: Kurs[] = []
  
  // форма для добавления нового курсв
  newTelegramName: string = '';
  newAuthorName: string = '';
  newPrice: number = 0;
  
  btnClick(){
    this.myname = this.myname + "|"
  }
  
  // добавить новый курс
  addBook() {
    if (this.newTelegramName.trim() && this.newAuthorName.trim() && this.newPrice > 0) {
      const newBook: Kurs = {
        telegramname: this.newTelegramName,
        authorname: this.newAuthorName,
        price: this.newPrice
      };
      this.books.push(newBook);
      
      //очистить форму
      this.newTelegramName = '';
      this.newAuthorName = '';
      this.newPrice = 0;
    }
  }
  
  deleteBook(index: number) {
    this.books.splice(index, 1);
  }
}
