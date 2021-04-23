import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import {formatDate} from "@angular/common";
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-update-repair-form',
  templateUrl: './update-repair-form.component.html',
  styleUrls: ['./update-repair-form.component.css']
})
export class UpdateRepairFormComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService, @Inject(LOCALE_ID, ) private locale: string) { }


  ngOnInit(): void {
  }

  
  updateRepair() {
    this.data.currentUpdateRepair.date = formatDate(this.data.currentUpdateRepair.date, 'yyyy-MM-dd HH:mm', this.locale)

    this.httpService.updateRepair(this.data.currentUpdateRepair).subscribe(() => {
      this.data.findRepairs();
      this.data.showToast('top-right', 'success', 'Erfolgreich bearbeitet');
      this.data.send();
      this.data.findDrivers();
      this.data.findRide();
    });
  }
}
