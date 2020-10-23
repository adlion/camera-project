import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpsRequestService {
  apiPath: string;

  constructor(private http: HttpClient) {
    this.apiPath = environment.API_URL;
  }

  // HTTP GET Requests
  getAllCameras() {
    return this.http.get<any>(this.apiPath + `/`);
  }

  deleteCamera(id: string) {
    return this.http.delete<any>(this.apiPath + '/id/' + id);
  }

  addCamera(data: String) {
    const options = {
      headers: {
        'content-type': ' application/json',
      },
    };
    return this.http.post<any>(this.apiPath, data, options);
  }

  searchCamera(path: string) {
    return this.http.get<any>(this.apiPath + '/' + path);
  }
}
