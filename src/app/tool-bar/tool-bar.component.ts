import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  isBatchDel: boolean;

  @Output()
  batchDelClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.isBatchDel = false;
  }

  readyBatchDelete() {
    this.isBatchDel = !this.isBatchDel;
    this.batchDelClick.emit(true);
  }

  batchDelete() {
    this.isBatchDel = !this.isBatchDel;
    this.batchDelClick.emit(false);
  }

  batchDeleteCancel() {
    this.isBatchDel = !this.isBatchDel;
    this.batchDelClick.emit(false);
  }

}
