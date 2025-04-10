import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  submit() {
    const task = this.task.trim();

    if (!task.trim()) return;

    this.taskAdded.emit(task);

    this.task = '';
  }
}
