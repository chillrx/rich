import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public tasks = localStorage.tasks ? JSON.parse(localStorage.tasks) : [];
  public taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      isFormVisible: [false],
      name: [''],
      description: ['', Validators.required],
    });
  }

  public saveTask() {
    this.tasks.push({
      name: this.taskForm.get('name').value,
      description: this.taskForm.get('description').value
    });

    this.taskForm.reset();
    
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
