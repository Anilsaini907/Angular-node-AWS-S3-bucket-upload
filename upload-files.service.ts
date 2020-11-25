import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
   constructor(private http: HttpClient) {}
  FOLDER: any;
  arraydata: [];
upload(file: File): any{

   const formData = new FormData();
   formData.append('file', file);
   console.log(`i am in uopload${file.name}`);
  //  const response = this.http.post('http://localhost:3000/upload', file);
  //  response.subscribe(
  //   (data) => console.log(data),
  //   (error) => console.log(error)
  // );

}


//   upload(file: File): any {
//     const contentType = file.type;
//     const bucket = new S3(
//           {
//               accessKeyId: 'AKIA5ZYC65IMKR3AN3MJ',
//               secretAccessKey: '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',
//               region: 'ap-south-1'
//           }
//       );
//       // tslint:disable-next-line:align
//       const params = {
//           Bucket: 'sspanil',
//           Key:  file.name,
//           Body: file,
//           ACL: 'public-read',
//           ContentType: contentType
//       };

//       // tslint:disable-next-line:align
//       bucket.upload(params, (err, data: {}) => {
//           if (err) {
//               console.log('There was an error uploading your file: ', err);
//               return false;
//           }
//           console.log('Successfully uploaded file.', data);
//           return true;

//       });


// // for upload progress
// /*bucket.upload(params).on('httpUploadProgress', function (evt) {
//           console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
//       }).send(function (err, data) {
//           if (err) {
//               console.log('There was an error uploading your file: ', err);
//               return false;
//           }
//           console.log('Successfully uploaded file.', data);
//           return true;
//       });*/
//       // tslint:disable-next-line:no-unused-expression
//       // getFiles(): Observable< > {
//       //    return this.http.get(`${this.baseUrl}/files`),
//       //   // tslint:disable-next-line:semicolon
//       //   }
// }


  // private baseUrl = 'http://localhost:3000';
  // constructor(private http: HttpClient) { }
  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file);
  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }
}
