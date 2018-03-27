import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mouseOvered: boolean = false;
  currentActiveTab: string;
  title = 'app';
  tablList: Array<any> = [];

  constructor() {

    let propertyTab = { name: 'propertyMenu', title: 'Building', subMenuList: [{ name: 'PropertySearchMenu', title: 'Search', url: '#' }, { name: 'AddNewProperty', title: 'AddProperty', url: '#' }] };
    let leaseTab = { name: 'Lease_div', title: 'Lease', subMenuList: [{ name: 'LeaseSearchMenu', title: 'LeaseSearch', url: '#' }] };
    //let quickEntryTab = { name: '', title: '', subMenuList: [{ name: '', title: '', url: '' }] };
    //let reportTab = { name: '', title: '', subMenuList: [{ name: '', title: '', url: '' }] };
    //let clientTab = { name: '', title: '', subMenuList: [{ name: '', title: '', url: '' }] };
    //let retailsTab = { name: '', title: '', subMenuList: [{ name: '', title: '', url: '' }] };
    //let brandTab = { name: '', title: '', subMenuList: [{ name: '', title: '', url: '' }] };
    //let securityTab = { name: '', title: '', subMenuList: [{ name: '', title: '', url: '' }] };
    this.tablList.push(propertyTab);
    this.tablList.push(leaseTab);
  }

  ngOnInit() {
  }

  mouseOverActive(tabName: string) {
    this.currentActiveTab = tabName;
    this.mouseOvered = true;
    console.log('mouseOverActive')
    console.log(this.mouseOvered);
  }

  mouseOutActive() {
    this.currentActiveTab = '';
    this.mouseOvered = false;
    console.log('mouseOutActive')
    console.log(this.mouseOvered);

  }
}
