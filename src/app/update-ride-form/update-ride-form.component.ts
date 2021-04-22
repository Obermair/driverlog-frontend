import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import {formatDate} from "@angular/common";
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-update-ride-form',
  templateUrl: './update-ride-form.component.html',
  styleUrls: ['./update-ride-form.component.css']
})
export class UpdateRideFormComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService, @Inject(LOCALE_ID, ) private locale: string) { }

  ngOnInit(): void {
  }

  updateRide() {
    this.data.currentUpdateRide.date = formatDate(this.data.currentUpdateRide.date, 'yyyy-MM-dd HH:mm', this.locale)

    this.httpService.updateRide(this.data.currentUpdateRide).subscribe(() => {
      this.data.findRide();
      this.data.showToast('top-right', 'success', 'Erfolgreich bearbeitet');
      this.data.send();
    });
  }

}
