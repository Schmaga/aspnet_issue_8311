import { Component } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  apiEndpoint = 'https://localhost:44384/api/values';

  constructor(private http: HttpClient) { }

  fileChange(event) {
    const fileList = event.target.files;

    if (fileList.length > 0) {
      const file: File = fileList[0];

      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      const req = new HttpRequest('POST', this.apiEndpoint, formData, {
        reportProgress: true
      });

      this.http.request(req).subscribe(r => console.log(r), e => console.log(e));
    }
  }
}
