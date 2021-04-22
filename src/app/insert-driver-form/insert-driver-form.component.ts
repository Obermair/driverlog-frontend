import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-insert-driver-form',
  templateUrl: './insert-driver-form.component.html',
  styleUrls: ['./insert-driver-form.component.css']
})
export class InsertDriverFormComponent implements OnInit {

  constructor(public httpService: HttpService, public data:DataService, @Inject(LOCALE_ID, ) private locale: string) { }

  ngOnInit(): void {
  }

  insertDriver() {
    this.httpService.addDriver(this.data.selectedDriver).subscribe(response =>{
      this.data.drivers.push(response);

      this.data.showToast('top-right', 'success', 'Erfolgreich eingefügt');
      
      this.data.selectedDriver = {
        firstname: '',
        lastname: ''
      }
      
      this.data.send();
    })
  }

}
