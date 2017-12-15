import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-admin',
  templateUrl: './grade-admin.component.html',
  styleUrls: ['./grade-admin.component.css']
})
export class GradeAdminComponent implements OnInit {

  isBatchDel: boolean;

  constructor() { }

  ngOnInit() {
  }

  batchDelClick(event) {
    this.isBatchDel = event;
  }

}
