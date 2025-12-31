import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { partner } from '../../../shared/models/iPartner.model';
import { vision } from '../../../shared/models/iVision.model';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  constructor(private http: HttpClient) {}

  getPartnerById(id: number) {
    return this.http.get<partner>(`http://localhost:3000/partners/${id}`);
  }
  getVisions(id: number) {
    return this.http.get<vision>(`http://localhost:3000/vision/${id}`);
  }
}
