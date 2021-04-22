import { Component, OnInit, Input } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { Ride } from '../model/ride';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { UpdateRideFormComponent } from '../update-ride-form/update-ride-form.component';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit {

  @Input() ride: Ride;
  @Input() index: number;

  constructor(public httpService: HttpService, public data:DataService, private windowService: NbWindowService) { }

  ngOnInit(): void {
  }

  deleteRide(rid: number) {
    this.httpService.deleteRide(rid).subscribe();
    this.data.ride.splice((this.index), 1);
    this.data.showToast('top-right', 'success', 'Erfolgreich gelöscht');
    this.data.send();
  }

  openRideUpdateWindow(ride: Ride) {
    this.data.currentUpdateRide = ride;

    this.windowService.open(UpdateRideFormComponent, { title: `Fahrt aktualisieren` });
  }
}
