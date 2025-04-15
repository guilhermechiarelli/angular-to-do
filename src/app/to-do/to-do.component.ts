import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskListComponent } from '../components/task-list/task-list.component';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFormComponent, TaskListComponent],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(task: string) {
    this.tasks.push({
      id: Date.now(),
      title: task,
      completed: false
    })

    this.saveTasks();
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }
}
