import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public counter = localStorage.counter ? JSON.parse(localStorage.counter) : 0;

  public addOneToCounter() {
    this.counter += 1;
    
    localStorage.setItem('counter', JSON.stringify(this.counter));
  }

}
