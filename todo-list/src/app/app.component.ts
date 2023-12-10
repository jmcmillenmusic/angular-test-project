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
}
