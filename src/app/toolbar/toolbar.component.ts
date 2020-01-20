import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  MenuItem: Array<string>;
  items: MenuItem[];
  
  constructor() { }

  ngOnInit() {
    this.items = [
            {label: 'Cut', icon: 'fa-cut'},
            {label: 'Copy', icon: 'fa-copy'},
            {label: 'Paste', icon: 'fa-paste'},
        ];
  }

}