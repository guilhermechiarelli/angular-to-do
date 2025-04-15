import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Task = {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  filter: 'all' | 'active' | 'completed' = 'all';

  @Input() tasks: Task[] = [];
  @Output() remove = new EventEmitter<number>();

  get remainingTasksCount() {
    return this.tasks.filter(task => !task.completed).length;
  }


  get filteredTasks() {
    switch (this.filter) {
      case 'active':
        return this.tasks.filter(task => !task.completed);
      case 'completed':
        return this.tasks.filter(task => task.completed);
      default:
        return this.tasks;
    }
  }

  onRemove(id: number) {
    this.remove.emit(id);
  }
}
