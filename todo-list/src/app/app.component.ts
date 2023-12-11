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
  tasks: Task[] = [
    // New instances of the Task object
    new Task('Visit Ann'), 
    new Task('Call Dad'), 
    new Task('Go the the gym'), 
    new Task('Wash the dishes'), 
    new Task('Shop for the party')
  ];

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  };

  remove(existingTask: Task) {
    var userConfirmed = confirm(`Are you sure you want to remove this task? \n "${existingTask.title}"`);
    if (userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  };

  
}

class Task {
  constructor(public title: string) {
    
  };

  toggleIsDone() {
    // Toggles isDone to true or false
    this.isDone = !this.isDone;
  };

  public isDone = false;
}