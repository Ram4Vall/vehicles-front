import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { VehicleRequest } from '../classes/vehicle-request';
import { Observable } from 'rxjs';

@Injectable()

export class VehiclesService {

  private API_URL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  processVehicle(vehicleRequest: VehicleRequest): Observable<Object> {
    const method = '/api/vehicle/ProcessVehicle';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<VehicleRequest>(this.API_URL.concat(method), vehicleRequest, { headers });
  }

}
