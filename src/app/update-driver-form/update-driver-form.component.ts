import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import {formatDate} from "@angular/common";
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-update-driver-form',
  templateUrl: './update-driver-form.component.html',
  styleUrls: ['./update-driver-form.component.css']
})
export class UpdateDriverFormComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService, @Inject(LOCALE_ID, ) private locale: string) { }
  
  ngOnInit(): void {
   
  }

  updateDriver() {
    this.httpService.updateDriver(this.data.currentUpdateDriver).subscribe(() => {
      this.data.findDrivers();
      this.data.showToast('top-right', 'success', 'Erfolgreich bearbeitet');
      this.data.send();
    });
  }

}
