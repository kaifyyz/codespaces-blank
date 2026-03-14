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
  sport: string[] = [
    "Анжумания",
    "Бегит",
    "Пресс качат"
  ]
  books: Kurs[] = [
    {telegramname: "Курсы для чайников", authorname: "Смаев", price: 100000},
    {telegramname: "Блиновская для спортсменов", authorname: "Блиновская", price: 9795000}
  ]
  btnClick(){
    this.myname = this.myname + "|"
  }
}
