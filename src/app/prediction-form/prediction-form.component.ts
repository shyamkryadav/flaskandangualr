import { Component } from '@angular/core';
import { PredictionService } from '../prediction.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-prediction-form',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],  // Add HttpClientModule here
  templateUrl: './prediction-form.component.html',
  styleUrls: ['./prediction-form.component.css']
})
export class PredictionFormComponent {
  predictionResult: any;
  formData = {
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: ''
  };
  constructor(private predictionService: PredictionService) {}
  onSubmit(): void {
    console.log(this.formData)
    this.predictionService.predict(this.formData).subscribe((res)=>{
      console.log(res)
      this.predictionResult=res.Prediction
    })
  }



  getPrediction() {
    const inputData = {
      feature1: 1.2,  // Replace with actual data
      feature2: 3.4   // Replace with actual data
    };

    this.predictionService.getPrediction(inputData).subscribe(
      (response) => {
        console.log('Prediction:', response);
        this.predictionResult = response.Prediction;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
