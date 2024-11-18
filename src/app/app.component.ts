import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PredictionFormComponent } from './prediction-form/prediction-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PredictionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'irisWeb';
}
