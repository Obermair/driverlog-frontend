import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Driver } from '../model/driver';
import { Fuel } from '../model/fuel';
import { Repair } from '../model/repair';
import { Ride } from '../model/ride';
import { HttpService } from './http.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket'; 
import { Settlement } from '../model/settlement';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  drivers: Array<Driver> = [];
  fuels: Array<Fuel> = [];
  repair: Array<Repair> = [];
  ride: Array<Ride> = [];
  lastSettlementRecord: Settlement;

  selectedDriver: Driver;
  selectedFuel: Fuel;
  selectedRepair: Repair;
  selectedRide: Ride;

  current_driver:Driver = {
    firstname: '',
    lastname: '',
  };

  username = new Date();
  connection: WebSocketSubject<any>;


  currentUpdateDriver: Driver;
  currentUpdateFuel: Fuel;
  currentUpdateRepair: Repair;
  currentUpdateRide: Ride;
  
  constructor(public http: HttpService, private toastrService: NbToastrService) { }

  findDrivers(){
  
    this.http.getDriversList().subscribe((data: Driver[]) => {
      this.drivers = data;

      for (let index = 0; index < this.drivers.length; index++) {
        this.getDriversKM(this.drivers[index].id).then((data)=>{
          if(data == undefined) {
            this.drivers[index].km = 0;
          }
          else{
            this.drivers[index].km = data;
          }
        });

        this.getDriversFuelCredits(this.drivers[index].id).then((data)=>{
          if(data == undefined) {
            this.drivers[index].fuelCredits = 0;
          }
          else{
            this.drivers[index].fuelCredits = data;
          }
        });

        this.getDriversRepairCredits(this.drivers[index].id).then((data)=>{
          if(data == undefined) {
            this.drivers[index].repairCredits = 0;
          }
          else{
            this.drivers[index].repairCredits = data;
          }
        });
      }
    });
  }

  setSettlement(){
    this.http.getLastSettlement().subscribe((settlement) => {
      this.lastSettlementRecord = settlement;
    })
  }

  getDriversKM(index: number){
    let driversRequest = new Promise<number>((resolve) => {
      this.http.getDrivenKilometers(index).subscribe((resp) => {
        resolve(resp);
      })
    })

    return driversRequest;
  }

  getDriversFuelCredits(index: number){
    let driversRequest = new Promise<number>((resolve) => {
      this.http.getFuelCredits(index).subscribe((resp) => {
        resolve(resp);
      })
    })

    return driversRequest;
  }

  getDriversRepairCredits(index: number){
    let driversRequest = new Promise<number>((resolve) => {
      this.http.getRepairCredits(index).subscribe((resp) => {
        resolve(resp);
      })
    })

    return driversRequest;
  }

  sortByRidesByDate(){
    this.ride.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    });
  }

  findFuels(){
    this.http.getFuelList().subscribe(data => {
      this.fuels = data;
    });
  }

  findRepairs(){
    this.http.getRepairList().subscribe(data => {
      this.repair = data;
    });
  }

  findRide(){
    this.http.getRideList().subscribe(data => {
      this.ride = data;
      this.sortByRidesByDate();
    });
  }

  showToast(position, status, message) {
    this.toastrService.show('', message, { position, status });
  }

  connect(): void {
    this.connection = webSocket({
      url: 'ws://vm137.htl-leonding.ac.at:8080/chat/' + this.username,
      deserializer: msg => msg.data
    });
      this.connection.subscribe((value) =>{
        this.findDrivers();
        this.findFuels();
        this.findRepairs();
        this.findRide();
      } 
    );
  }

  send(): void {
    this.connection.next("update");
  }

  disconnect(): void {
    if (this.connection) {
      this.connection.complete();
      this.connection = null;
    }
  }
}
