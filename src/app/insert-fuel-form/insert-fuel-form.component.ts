import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-insert-fuel-form',
  templateUrl: './insert-fuel-form.component.html',
  styleUrls: ['./insert-fuel-form.component.css']
})
export class InsertFuelFormComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService, @Inject(LOCALE_ID, ) private locale: string) { }

  ngOnInit(): void {
  }

  insertFuel() {
    this.data.selectedFuel.date = formatDate(this.data.selectedFuel.date, 'yyyy-MM-dd HH:mm', this.locale)

    this.httpService.addFuel(this.data.selectedFuel).subscribe(response =>{
      this.data.fuels.push(response);

      this.data.showToast('top-right', 'success', 'Erfolgreich eingefügt');
      
      this.data.selectedFuel = {
        driver: null,
        date: '',
        price: null
      }
      this.data.send();
      this.data.findDrivers();
      this.data.findRide();
    })
  }

}
