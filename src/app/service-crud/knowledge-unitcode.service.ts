import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeUnitcodeService {

  private apiUrl = 'https://cute-puce-cocoon-cap.cyclic.app'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  createUknowlege(uknowlege: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createUknowlege`, uknowlege);
  }

  getUknowleges(): Observable<any>{
    return this.http.get(`${this.apiUrl}/getUknowlege`);
  }

  updateUknowlege(id: number, uknowlege: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateUknowlege/${id}`, uknowlege);
  }

  deleteUknowlege(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteUknowlege/${id}`);
  }

  


}
