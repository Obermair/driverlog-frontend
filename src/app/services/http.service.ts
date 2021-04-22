import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../model/driver';
import { Fuel } from '../model/fuel';
import { Repair } from '../model/repair';
import { Ride } from '../model/ride';
import { Observable } from 'rxjs';
import { Settlement } from '../model/settlement';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  http: HttpClient;
  api: String = "https://vm137.htl-leonding.ac.at";

  constructor(http: HttpClient) { 
    this.http = http;
  }

  getDrivenKilometers(id: number): Observable<any>{
    return this.http.get<any>(this.api + '/api/driver/driven/' + id);
  }

  getLastSettlement(): Observable<Settlement>{
    return this.http.get<Settlement>(this.api + '/api/settlement/lastRecord');
  }


  getFuelCredits(id: number){
    return this.http.get<number>(this.api + '/api/driver/fuelCredits/' + id);
  }

  getRepairCredits(id: number){
    return this.http.get<number>(this.api + '/api/driver/repairCredits/' + id);
  }

  getLastRides(id: number){
    return this.http.get<Ride[]>(this.api + '/api/driver/rides/' + id);
  }

  getDriversList(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.api + '/api/driver');
  }

  getFuelList(): Observable<Fuel[]> {
    return this.http.get<Fuel[]>(this.api + '/api/fuel');
  }

  getRepairList(): Observable<Repair[]> {
    return this.http.get<Repair[]>(this.api + '/api/repair');
  }

  getRideList(): Observable<Ride[]> {
    return this.http.get<Ride[]>(this.api + '/api/ride');
  }

  getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(this.api + '/api/driver/'+ id);
  }

  getFuelById(id: number): Observable<Fuel> {
    return this.http.get<Fuel>(this.api + '/api/fuel/'+ id);
  }

  getRepairById(id: number): Observable<Repair> {
    return this.http.get<Repair>(this.api + '/api/repair/'+ id);
  }

  getRideById(id: number): Observable<Ride> {
    return this.http.get<Ride>(this.api + '/api/ride/'+ id);
  }

  addDriver(driver: Driver): Observable<Driver> {
    return this.http.post<Driver>(this.api + '/api/driver/', driver);
  }

  addFuel(fuel: Fuel): Observable<Fuel> {
    return this.http.post<Fuel>(this.api + '/api/fuel/', fuel);
  } 
  
  addRepair(repair: Repair): Observable<Repair> {
    return this.http.post<Repair>(this.api + '/api/repair/', repair);
  }

  addRide(ride: Ride): Observable<Ride> {
    return this.http.post<Ride>(this.api + '/api/ride/', ride);
  }

  addSettlement(settlement: Settlement): Observable<Settlement> {
    return this.http.post<Settlement>(this.api + '/api/settlement/', settlement);
  }
  
  updateDriver(driver: Driver): Observable<Driver> {
    return this.http.put<Driver>(this.api + '/api/driver/', driver);
  }

  updateFuel(fuel: Fuel): Observable<Fuel> {
    return this.http.put<Fuel>(this.api + '/api/fuel/', fuel);
  }

  updateRepair(repair: Repair): Observable<Repair> {
    return this.http.put<Repair>(this.api + '/api/repair/', repair);
  }

  updateRide(ride: Ride): Observable<Ride> {    
    return this.http.put<Ride>(this.api + '/api/ride/', ride);
  }

  deleteDriver(id: number): Observable<Driver>{
    return this.http.delete<Driver>(this.api + '/api/driver/' + id);
  }

  deleteFuel(id: number): Observable<Fuel>{
    return this.http.delete<Fuel>(this.api + '/api/fuel/' + id);
  }

  deleteRepair(id: number): Observable<Repair>{
    return this.http.delete<Repair>(this.api + '/api/repair/' + id);
  }

  deleteRide(id: number): Observable<Ride>{
    return this.http.delete<Ride>(this.api + '/api/ride/' + id);
  }

  deleteSettlementData(): Observable<any>{
    return this.http.delete<any>(this.api + '/api/settlement/deleteSettlementData');
  }
}
