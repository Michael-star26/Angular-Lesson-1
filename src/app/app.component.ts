import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EssentialsComponent } from './essentials/essentials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EssentialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lesson-1';
}
