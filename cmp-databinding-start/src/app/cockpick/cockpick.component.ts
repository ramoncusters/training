import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpick',
  templateUrl: './cockpick.component.html',
  styleUrls: ['./cockpick.component.css']
})
export class CockpickComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

    onAddServer() {
/*     this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }

  onAddBlueprint() {
/*     this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    }); */
  }

}
