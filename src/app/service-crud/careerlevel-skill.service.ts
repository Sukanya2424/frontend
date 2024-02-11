import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CareerlevelSkillService {

  private apiUrl = 'https://cute-puce-cocoon-cap.cyclic.app'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  createClSkill(clskill: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createClSkill`, clskill);
  }

  getClSkill(): Observable<any>{
    return this.http.get(`${this.apiUrl}/getClSkill`);
  }

  updateClSkill(id: number, clskill: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateClSkill/${id}`, clskill);
  }

  deleteClSkill(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteClSkill/${id}`);
  }


}
