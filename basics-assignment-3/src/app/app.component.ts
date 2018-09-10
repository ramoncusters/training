import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayYesNo = false;
  clicksArray = [];
  dateTime;
  
  displayDetails() {
    this.displayYesNo = this.displayYesNo ? false : true;
    this.clicksArray.push(new Date());
  };

}
