import { Component, inject, NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatFormField } from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation-service';
import { Reservation } from '../../services/reservation';
import { Observable } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTimepicker } from '@angular/material/timepicker';




@Component({
  standalone: true,
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.html',
  styleUrls: ['./reservation-form.css'],
  imports: [ReactiveFormsModule, RouterLink, MatFormField, MatInputModule, MatButton, MatDatepicker,  MatFormFieldModule, MatNativeDateModule, MatIconModule, MatDatepickerModule, /*MatTimepicker*/ ]
})

export class ReservationForm {
  reservationForm = new FormGroup({
    name: new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    persons: new FormControl(),
    sonstiges: new FormControl(),
  })
  
  reservationService: ReservationService = inject(ReservationService);
  reservations:Reservation[] = [];
  reservationsHttp$:Observable<Reservation[]>;
  newid:Number;
  

  save(){
    if(!isNaN(Number(this.reservationForm.value.persons)) &&
      this.reservationForm.value.persons <= 8 &&
      this.reservationForm.value.persons >= 1)
      {
        console.log(this.reservationForm.value.name);
        console.log(this.reservationForm.value.date);
        console.log(this.reservationForm.value.time);
        console.log(this.reservationForm.value.persons);
        
        const usedIDs = this.reservations.map(p => p.id);
        let nextId = 0;
        
        while (usedIDs.includes(nextId)){
          nextId++;
        }
        var reservation: Reservation = {
          id:nextId,
          name:this.reservationForm.value.name,
          date:this.reservationForm.value.date,
          time:this.reservationForm.value.time,
          persons:this.reservationForm.value.persons,
          sonstiges:this.reservationForm.value.sonstiges
        }
        this.reservationService.addReservation(reservation);

        this.router.navigate(['/menu']);

        alert('Reservierung erfolgreich :D')
      }
    
  }

  constructor (private router:Router){
    this.reservationsHttp$  = this.reservationService.getRerservationHttp();
    this.reservations = this.reservationService.getAllReservations();
    this.newid = this.reservations.length + 1;
  }


}



