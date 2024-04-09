import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient: HttpClient) { }
  getHomeData(): Observable<any> {
    return this._HttpClient.get(environment.apiUrl + "/api/home");
  }
  addEmail(formData: FormData): Observable<any> {
    return this._HttpClient.post(environment.apiUrl + "/api/add/order", formData);
  }

}
