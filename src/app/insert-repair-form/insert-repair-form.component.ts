import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-insert-repair-form',
  templateUrl: './insert-repair-form.component.html',
  styleUrls: ['./insert-repair-form.component.css']
})
export class InsertRepairFormComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService, @Inject(LOCALE_ID, ) private locale: string) { }

  ngOnInit(): void {
  }

  insertRepair() {
    this.data.selectedRepair.date = formatDate(this.data.selectedRepair.date, 'yyyy-MM-dd HH:mm', this.locale)

    this.httpService.addRepair(this.data.selectedRepair).subscribe(response =>{
      this.data.repair.push(response);

      this.data.showToast('top-right', 'success', 'Erfolgreich eingefügt');
      
      this.data.selectedRepair = {
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
