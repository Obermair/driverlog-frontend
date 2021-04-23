import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-insert-ride-form',
  templateUrl: './insert-ride-form.component.html',
  styleUrls: ['./insert-ride-form.component.css']
})
export class InsertRideFormComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService, @Inject(LOCALE_ID, ) private locale: string) { }

  ngOnInit(): void {

  }

  insertRide() {
    this.data.selectedRide.date = formatDate(this.data.selectedRide.date, 'yyyy-MM-dd HH:mm', this.locale)

    this.httpService.addRide(this.data.selectedRide).subscribe(response =>{
      this.data.ride.push(response);

      this.data.showToast('top-right', 'success', 'Erfolgreich eingefügt');
      
      this.data.selectedRide = {
        driver: null,
        date: '',
        km: null,
        description: ''
      }
      this.data.send();
      this.data.findDrivers();
      this.data.findRide();
    })
  }

}
