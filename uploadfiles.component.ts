import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from 'src/app/services/upload-files.service';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FILE } from 'dns';
import { httpstatus } from 'aws-sdk/clients/glacier';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit {

  selectedFiles: FileList;
  uploadedFiles: FileList;
  progressInfos = [];
  message = '';
  // tslint:disable-next-line:ban-types
  FileName: String;
// tslint:disable-next-line:ban-types
  ext: String;
  fileInfos: Observable<any>;
  image: any;
  i: number;
  constructor(private uploadService: UploadFilesService , private http: HttpClient) { }
   // tslint:disable-next-line:align

   // tslint:disable-next-line:typedef
//    fileChange(element) {
//     this.uploadedFiles = element.target.files;
// }

// uploadNew(): void {
//   // tslint:disable-next-line:prefer-const
//   let formData = new FormData();
//   // tslint:disable-next-line:prefer-for-of
//   for (let i = 0; i < this.uploadedFiles.length; i++) {
//       formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
//   }
//   this.http.post('http://localhost:3000/upload', formData)
//   .subscribe((response) => {
//        console.log('response received is ', response);
//   });
// }


  selectFiles(event): void {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;

    for ( this.i = 0; this.i < this.selectedFiles.length; this.i++){
      console.log(this.selectedFiles[this.i].name);
    }
    const file = event.target.files[0];
    this.image = file;
  }
  uploadFiles(): void {
    // tslint:disable-next-line:new-parens
    const formdata = new FormData;
    formdata.append('file', this.image);
    this.http.post('http://localhost:3000/upload', formdata).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
    alert(this.selectedFiles[i].name);
    this.upload(i, this.selectedFiles[i]);
    }

  }
  // tslint:disable-next-line:ban-types
  validateFile(FileName ): String {
     this.ext = FileName.substring(FileName.lastIndexOf('.') + 1);
     if (this.ext.toLowerCase() === 'txt' || 'csv' || 'xsl' || 'xlsx') {
        return this.message = 'Uloading... please wait a while';
    }
    else {
        return this.message = 'Invalid Format Could not upload the file:';
    }
}

  upload(idx, file): any{
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    // alert(this.progressInfos.value);
    this.validateFile(file.name);
    // this.uploadService.upload(file).subscribe(
    //   event => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
    //       console.log(this.progressInfos[idx].value);
    //     } else if (event instanceof HttpResponse) {
    //       // this.fileInfos = this.uploadService.getFiles();
    //     }
    //   },
    //   err => {
    //     this.progressInfos[idx].value = 0;
    //     this.message = 'Could not upload the file:' + file.name;
    //   });
  }
  ngOnInit(): void {
    // this.fileInfos = this.uploadService.getFiles();
  }

}
