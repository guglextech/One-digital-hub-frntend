import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { UploadService } from 'src/app/core/services/upload.service';
import { NgIf } from '@angular/common';

 
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  imports: [NgIf],
  standalone : true
})
export class UploadComponent {
  @Input() control?: FormControl;
  @Output() uploaded = new EventEmitter<string>(); 
  uploading = false;
  progress = 0;

  selectedFileName: string | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  uploadProgress: number | null = null;

  constructor(private uploadService: UploadService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    

    const file = input.files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview = e.target.result;
    };
    reader.readAsDataURL(file);

    
    this.uploading = true;
    this.uploadService.uploadFile(file).subscribe({
      next: (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          const fileUrl = event.body.result;
          this.control?.setValue(fileUrl); 
          this.uploaded.emit(fileUrl);
          this.uploading = false;
        }
      },
      error: () => {
        this.uploading = false;
        alert('Upload failed');
      }
    });
  }
}
