import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule,NbToastrModule, NbLayoutModule,NbIconModule,  NbCheckboxModule, NbWindowModule, NbSelectModule, NbActionsModule, NbSidebarModule, NbButtonModule,NbInputModule, NbCardModule, NbUserModule, NbDatepickerModule, NbFormFieldComponent, NbFormFieldModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { UpdateRideFormComponent } from './update-ride-form/update-ride-form.component';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { InsertRideFormComponent } from './insert-ride-form/insert-ride-form.component';
import { InsertDriverFormComponent } from './insert-driver-form/insert-driver-form.component';
import { InsertFuelFormComponent } from './insert-fuel-form/insert-fuel-form.component';
import { InsertRepairFormComponent } from './insert-repair-form/insert-repair-form.component';
import { UpdateDriverFormComponent } from './update-driver-form/update-driver-form.component';
import { UpdateRepairFormComponent } from './update-repair-form/update-repair-form.component';
import { UpdateFuelFormComponent } from './update-fuel-form/update-fuel-form.component';
import { SettlementComponent } from './settlement/settlement.component';

@NgModule({
  declarations: [
    AppComponent,
    RideDetailComponent,
    UpdateRideFormComponent,
    InsertRideFormComponent,
    InsertDriverFormComponent,
    InsertFuelFormComponent,
    InsertRepairFormComponent,
    UpdateDriverFormComponent,
    UpdateRepairFormComponent,
    UpdateFuelFormComponent,
    SettlementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NbAccordionModule,
    FormsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbFormFieldModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(), 
    NbDatepickerModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NbActionsModule,
    NbCardModule,
    NbUserModule,
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSelectModule,
    NbCheckboxModule,
    NbIconModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
