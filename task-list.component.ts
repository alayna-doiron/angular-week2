
	import { Component } from '@angular/core';

	@Component({
		selector: 'app-task-list',
		templateUrl: './task-list.component.html',
		styleUrls: ['./task-list.component.css']
	})
	export class TaskListComponent {
		tasks = [
			{taskName:'', taskCategory:null, taskPriority:null}
		];
		newTask = {taskName:'', taskCategory:null, taskPriority:null}

		constructor() {
			this.sortTasks();
		}

		sortTasks() {
			this.tasks = this.tasks.sort((a,b) => {
				 return a.taskPriority-b.taskPriority;
			});
		}

		addTask() {
			this.tasks.push(this.newTask);
			this.newTask = {taskName:'', taskCategory:null, taskPriority:null};
			this.sortTasks();
		}
	}
