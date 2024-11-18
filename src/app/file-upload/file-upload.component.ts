import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {

  selectedFiles: File[] = [];

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    if (this.selectedFiles.length === 0) {
      console.log("No files selected");
      return;
    }
  
    const formData = new FormData();
    // Send the file with the correct key: 'file'
    for (let file of this.selectedFiles) {
      formData.append("file", file, file.name); // Changed from "files" to "file"
    }
  
    // Adjust the URL according to your Flask backend
    this.http.post('http://localhost:5000/upload', formData)
      .subscribe(response => {
        console.log("File upload response", response);
      }, error => {
        console.error("Error uploading files", error);
      });
  }
  


}
