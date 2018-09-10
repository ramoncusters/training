import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayYesNo = false;
  clicksArray =[
    {number: 0,
    timeStamp: Date()}
  ];
  clickNo = 0;
  dateTime;
  
  displayDetails() {
    this.clickNo = this.clickNo + 1;
    this.dateTime = new Date();
    this.displayYesNo = this.displayYesNo ? false : true;
    this.clicksArray.push(  {number: this.clickNo, timeStamp: this.dateTime} );
  };

  getBackGroundColor(number) {
    if ( number > 4 ) {
      return 'blue';
    }
  };

  getTextColor(number) {
    if ( number > 4 ) {
      return 'white';
    }
  };

}
