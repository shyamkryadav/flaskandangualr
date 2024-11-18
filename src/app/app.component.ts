import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PredictionFormComponent } from './prediction-form/prediction-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PredictionFormComponent,FileUploadComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'irisWeb';
}
