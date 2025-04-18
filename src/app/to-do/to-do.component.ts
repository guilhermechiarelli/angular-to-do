import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { Task, TaskService } from '../services/task.service';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFormComponent, TaskListComponent],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: string) {
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
