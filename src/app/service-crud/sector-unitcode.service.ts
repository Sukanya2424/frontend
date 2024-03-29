import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectorUnitcodeService {

  private apiUrl = 'https://tpqi-backend.cyclic.app'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  createUnitSector(sector: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createUnitSector`, sector);
  }

  getUnitUnitSector(): Observable<any>{
    return this.http.get(`${this.apiUrl}/getUnitSector`);
  }

  updateUnitSector(id: number, sector: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateUnitSector/${id}`, sector);
  }

  deleteUnitSector(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteUnitSector/${id}`);
  }


}
