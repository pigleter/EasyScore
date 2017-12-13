import { Component, OnInit } from '@angular/core';
import 'jquery';
import 'semantic-ui-shape';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      $('.shape').shape('flip up');
    }, 5000);

  }

}
