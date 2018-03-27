import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.css']
})
export class HomeTabComponent implements OnInit {
  @Input() tablist: Array<any>;  
  currentActiveTab: string;
  constructor() { }

  ngOnInit() {
  }

  mouseOverActive(tabName: string) {
    this.currentActiveTab = tabName;
    console.log(this.currentActiveTab);
  }

  mouseOutActive() {
    this.currentActiveTab = '';    

  }

}
