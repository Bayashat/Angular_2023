import { Component } from '@angular/core';
import { Task } from '../models'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  newTasks: Task[];
  doneTasks: Task[];
  currentTask: Task;

  constructor() {
    this.newTasks = [
      // new Task('Task 1'),
      // new Task( 'Task 2'),
      // new Task('Task 3'),
    ];
    this.doneTasks = [];
    this.currentTask = new Task( '');
  }

  addTask(){
    if (this.currentTask.title != ""){
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task('');
    } else {
      alert("Enter the name of task");
    }
  }

  // removeTask(index: number){
  //   this.newTasks = this.newTasks.filter((x) => x.id != index);
  // }

  onNewTaskRemove(index: number) {
    this.newTasks = this.newTasks.filter( (x) => x.id != index);
  }

  onDoneTaskRemove(index: number) {
    this.doneTasks = this.doneTasks.filter( (x) => x.id != index);
  }

  isDoneChanged(task: Task){
    console.log(task)
  }

  onIsDoneChanged(task: Task) {
    if (task.isDone) {
      this.onNewTaskRemove(task.id);
      this.doneTasks.push(task);
    } else {
      this.onDoneTaskRemove(task.id)
      this.newTasks.push(task);
      this.newTasks.sort((a,b) => a.id > b.id ? 1 : -1);
    }
  }
}
