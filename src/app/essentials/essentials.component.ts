import { Component } from '@angular/core';

@Component({
  selector: 'app-essentials',
  standalone: true,
  imports: [],
  templateUrl: './essentials.component.html',
  styleUrl: './essentials.component.css'
})
export class EssentialsComponent {
  taskTitle='Clean Dishes'
  isComplete=false
  theme='positive'
  otherTask=false

  completeTask(){
    this.isComplete=true
  }
  taskNotComplete(){
    this.isComplete=false
    this.otherTask=false
  }

  updateTitle(newTitle:string){
    this.taskTitle=newTitle
  }

  otherTasks(){
    this.otherTask=true
  }

  tasks=[{role:'Web developer',responsibility:'Develop and Maintain web applications'},{role:'Data Scientist',responsibility:'Clean and analyze data using either python,R or excel'},{role:'Cyber Security Analyst',responsibility:'Monitor the entire system, blocking loopholes that could act as potential security breach point'},{role:'UI/UX designer',responsibility:'Develop User friendly and responsive user interface'}]
}
