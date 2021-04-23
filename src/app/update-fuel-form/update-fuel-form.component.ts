import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import {formatDate} from "@angular/common";
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-update-fuel-form',
  templateUrl: './update-fuel-form.component.html',
  styleUrls: ['./update-fuel-form.component.css']
})
export class UpdateFuelFormComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService, @Inject(LOCALE_ID, ) private locale: string) { }

  ngOnInit(): void {
  }

  updateFuel() {
    this.data.currentUpdateFuel.date = formatDate(this.data.currentUpdateFuel.date, 'yyyy-MM-dd HH:mm', this.locale)

    this.httpService.updateFuel(this.data.currentUpdateFuel).subscribe(() => {
      this.data.findFuels();
      this.data.showToast('top-right', 'success', 'Erfolgreich bearbeitet');
      this.data.send();
      this.data.findDrivers();
      this.data.findRide();
    });
  }

}
