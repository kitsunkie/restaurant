import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url= "http://localhost:3000/reservations"

  constructor(private http: HttpClient) { 
    this.reservations 
  }

  reservations:Reservation[] = [];

  getAllReservations():Reservation[]{
    return this.reservations
  }

  getRerservationHttp():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.url);
  }

  addReservation(reservation: Reservation) {
    return this.http.post<Reservation>(this.url, reservation).subscribe();
  }


  
}
