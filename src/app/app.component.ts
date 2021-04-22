import { Component } from '@angular/core';
import { NbThemeService, NbWindowService } from '@nebular/theme';
import { DataService } from './services/data.service';
import { HttpService } from './services/http.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Driver } from './model/driver';
import { Fuel } from './model/fuel';
import { Repair } from './model/repair';
import { InsertRideFormComponent } from './insert-ride-form/insert-ride-form.component';
import { InsertFuelFormComponent } from './insert-fuel-form/insert-fuel-form.component';
import { UpdateFuelFormComponent } from './update-fuel-form/update-fuel-form.component';
import { InsertRepairFormComponent } from './insert-repair-form/insert-repair-form.component';
import { UpdateRepairFormComponent } from './update-repair-form/update-repair-form.component';
import { InsertDriverFormComponent } from './insert-driver-form/insert-driver-form.component';
import { UpdateDriverFormComponent } from './update-driver-form/update-driver-form.component';
import { SettlementComponent } from './settlement/settlement.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        width: '280px',
        opacity: 1
      })),
      state('out', style({
        width: '0px',
        opacity:0
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  
  constructor(public http: HttpService, public data: DataService, private themeService: NbThemeService, private windowService: NbWindowService) {
    this.themeService.changeTheme('default');
  }

  driverViewState:string = 'out';
  fuelViewState:string = 'out';

  ngOnInit(){
    this.data.connect();
    this.data.findDrivers();
    this.data.findRepairs();
    this.data.findFuels();
    this.data.findRide();
    this.data.setSettlement();
  }

  toggleDriverView(){
    this.driverViewState = this.driverViewState === 'out' ? 'in' : 'out';
  }

  toggleFuelView(){
    this.fuelViewState = this.fuelViewState === 'out' ? 'in' : 'out';
  }

  openSettlementView(){
    this.windowService.open(SettlementComponent, { title: `Abrechnung` });
  }

  openNewRideWindow() {
    this.data.selectedRide = {
      driver: null,
      date: '',
      km: null,
      description: ''
    }

    this.windowService.open(InsertRideFormComponent, { title: `Neue Fahrt eintragen` });
  }

  openNewDriverWindow() {
    this.data.selectedDriver = {
      firstname: '',
      lastname: ''
    }

    this.windowService.open(InsertDriverFormComponent, { title: `Neuen Fahrer eintragen` });
  }

  openDriverUpdateWindow(driver: Driver) {
    this.data.currentUpdateDriver = driver;

    this.windowService.open(UpdateDriverFormComponent, { title: `Fahrerinfo` });
  }

  deleteFuel(index: number, fid: number){
    this.http.deleteFuel(fid).subscribe();
    this.data.fuels.splice(index, 1);
    this.data.showToast('top-right', 'success', 'Erfolgreich gelöscht');
    this.data.send();
  }

  openNewFuelWindow() {
    this.data.selectedFuel = {
      driver: null,
      date: '',
      price: null
    }

    this.windowService.open(InsertFuelFormComponent, { title: `Neu getankt` });
  }

  openFuelUpdateWindow(fuel: Fuel) {
    this.data.currentUpdateFuel = fuel;

    this.windowService.open(UpdateFuelFormComponent, { title: `Tankung aktualisieren` });
  }

  deleteRepair(index: number, rid: number){
    this.http.deleteRepair(rid).subscribe();
    this.data.repair.splice(index, 1);
    this.data.showToast('top-right', 'success', 'Erfolgreich gelöscht');
    this.data.send();
  }

  openNewRepairWindow() {
    this.data.selectedRepair = {
      driver: null,
      date: '',
      price: null
    }

    this.windowService.open(InsertRepairFormComponent, { title: `Werkstattbesuch` });
  }

  openRepairUpdateWindow(repair: Repair) {
    this.data.currentUpdateRepair = repair;

    this.windowService.open(UpdateRepairFormComponent, { title: `Werkstattbesuch aktualisieren` });
  }

}
