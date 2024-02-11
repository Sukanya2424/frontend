import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnitcodeService {

  private apiUrl = 'https://dark-lime-caiman-boot.cyclic.app'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  createUnitcode(unit: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createUnitcode`, unit);
  }

  getUnitcodes(): Observable<any>{
    return this.http.get(`${this.apiUrl}/getUnitcode`);
  }

  updateUnitcode(id: number, unit: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateUnitcode/${id}`, unit);
  }

  deleteUnitcode(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteUnitcode/${id}`);
  }
}
