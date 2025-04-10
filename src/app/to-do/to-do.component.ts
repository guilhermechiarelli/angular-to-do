import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from '../components/task-form/task-form.component';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFormComponent],
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
    console.log('Adding task:', task);
    this.tasks.push({ title: task, completed: false });
    this.saveTasks();
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }
}
