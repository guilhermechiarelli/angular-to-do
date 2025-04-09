import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (!this.newTask.trim()) return;

    this.tasks.push({ title: this.newTask.trim(), completed: false });
    this.newTask = '';
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
