import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'semantic-ui-checkbox';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.ui.checkbox').checkbox();
  }

}
