import { Injectable } from '@angular/core';

export type Task = {
  id: number;
  title: string;
  completed: boolean;
}


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    const newTask: Task = { id: Date.now(), title, completed: false };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}