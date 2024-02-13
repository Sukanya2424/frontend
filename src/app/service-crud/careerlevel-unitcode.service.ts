import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CareerlevelUnitcodeService {

  private apiUrl = 'https://tpqi-backend.cyclic.app'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  createClAndUn(clun: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createClAndUn`, clun);
  }

  getClAndUns(): Observable<any>{
    return this.http.get(`${this.apiUrl}/getClAndUns`);
  }

  updateClAndUn(id: number, clun: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateClAndUn/${id}`, clun);
  }

  deleteClAndUn(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteClAndUn/${id}`);
  }



}
