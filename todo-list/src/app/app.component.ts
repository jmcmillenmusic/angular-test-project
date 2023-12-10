import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
  tasks = [
    'Visit Ann', 
    'Call Dad', 
    'Go the the gym', 
    'Wash the dishes', 
    'Shop for the party'
  ];

  add(newTask: string) {
    this.tasks.push(newTask);
  };

  remove(existingTask: string) {
    var userConfirmed = confirm(`Are you sure you want to remove this task? \n "${existingTask}"`);
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  };

  markAsDone(task: string) {
    alert('This task is done: ' + task);
  };
}

class Tank {
  constructor(public title: string) {
    
  };
}