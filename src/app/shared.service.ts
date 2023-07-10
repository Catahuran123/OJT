import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'https://localhost:44349/api';

  constructor(private http: HttpClient) {}

  ViewList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/ojtPractices');
  }

  Add(add: any = {}) {
    return this.http.post<any[]>(this.APIUrl + '/ojtPractices', add);
  }

  Edit(val: any = {}) {
    return this.http.put(this.APIUrl + '/ojtPractices', val, {
      responseType: 'text',
    });
  }

  Delete(id: string) {
    return this.http.delete(this.APIUrl + '/ojtPractices/${id}', {
      responseType: 'text',
    });
  }
}
