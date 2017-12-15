import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'semantic-ui-sidebar';
import 'semantic-ui-accordion';
import 'semantic-ui-transition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
