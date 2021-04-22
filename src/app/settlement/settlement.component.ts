import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Settlement } from '../model/settlement';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService,  @Inject(LOCALE_ID, ) private locale: string) { }

  km_price: number = 0.16;
  mileage: number;

  ngOnInit(): void {
    this.mileage = this.data.lastSettlementRecord.new_mileage + 1000;
  }

  getLeaderPrice(){
    let total_km = 0;
    this.data.drivers.forEach((driver) => {
      if(!driver.leader){
        total_km += driver.km;
      }
    })

    return (this.mileage - this.data.lastSettlementRecord.new_mileage) - total_km;
  }

  startNewSettlement(){
    let current_date = formatDate(new Date(), 'yyyy-MM-dd HH:mm', this.locale)

    let settlement: Settlement = {
      date: current_date,
      km_price: this.km_price,
      last_mileage: this.data.lastSettlementRecord.new_mileage,
      new_mileage: this.mileage
    }

    this.httpService.addSettlement(settlement).subscribe((result) => {
      this.httpService.deleteSettlementData().subscribe((result) => {
        this.data.findRepairs();
        this.data.findFuels();
        this.data.findRide();
        this.data.findDrivers();
        this.data.setSettlement();
        this.data.showToast('top-right', 'success', 'Neue Abrechnung begonnen');
      })
    })

  }
}
