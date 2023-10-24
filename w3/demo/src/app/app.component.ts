import { Component } from '@angular/core';
// import { Student } from './models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string;
	message: string;
	numbers: number[];
	isOK: boolean;
	students: any[];
	tasks: string[];
	inputData: string;

	constructor() {
		console.log('constructor of AppComponent started');
		this.title = 'Demo';
		this.message = 'Hello World';
		this.numbers = [1, 2, 3, 4, 5];
		this.isOK = false;
		this.students = [
			{
				id: '21BD123123',
				name: 'Student 1',
				gpa: 3.7
			},
			{
				id: '22BD456456',
				name: 'Student 2',
				gpa: 3.2
			},
			{
				id: '20BD789789',
				name: 'Student 3',
				gpa: 3.5
			}
		];
		this.tasks = [];
		this.inputData = '';
	}

	btnClick() {
		this.isOK = !this.isOK;
	}

	addTask() {
		this.tasks.push(this.inputData);
		this.inputData = "";
	}

	deleteTask(index: number) {
		this.tasks.splice(index, 1);
	}
}
