import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from 'src/app/services/upload-files.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  fileInfos: any;

  constructor( private uploadService: UploadFilesService ) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
//     this.fileInfos = this.uploadService.upload(File).subscribe(res => {
//       console.log(res);
// });
  }

}
