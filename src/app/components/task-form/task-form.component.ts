import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  @Output() taskAdded = new EventEmitter<string>();

  ngOnInit() {
    this.taskForm = this.fb.group({
      task: ['', Validators.required]
    })
  }

  submit() {
    this.formSubmitted = true;

    const task = this.taskForm.value.task.trim();

    if (this.taskForm.invalid) return;

    this.taskAdded.emit(task);

    this.taskForm.reset();

    this.formSubmitted = false;
  }
}
