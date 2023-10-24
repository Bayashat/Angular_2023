import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import { Task } from '../models';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() task: Task;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();

  constructor() {
    console.log("constructor")
    this.task = {id: 0, title: "", isDone: false};
  }
  ngOnInit(): void {
    // fetch data from other resources (server, local storage, etc) to here
    console.log("onInit")
  }

  ngOnChanges(): void {
    console.log("onChanges")
  }

  ngOnDestroy(): void {
    console.log("onDestroy")
  }


  removeTask() {
    this.remove.emit(this.task.id)  // send parent task id to remove
  }

  isDoneChanged() {
      this.done.emit(this.task)
  }

}
