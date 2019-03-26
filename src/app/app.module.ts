import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassordComponent } from './forgot-passord/forgot-passord.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthService } from "./shared/services/auth.service";
import { NavbarComponent } from './navbar/navbar.component'; 
import { HomepageComponent } from './homepage/homepage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileComponent } from './customerdashboard/profile/profile.component';
import { VehiclesComponent } from './customerdashboard/vehicles/vehicles.component';
import { VehicleComponent } from './customerdashboard/vehicles/vehicle/vehicle.component';
import { VehicleListComponent } from './customerdashboard/vehicles/vehicle-list/vehicle-list.component';
import {VehicleService} from './shared/vehicle.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { QRCodeModule } from 'angularx-qrcode';  
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { GenerateqrComponent } from './servicestation/generateqr/generateqr.component'; 
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { LubricantsComponent } from './customerdashboard/lubricants/lubricants.component';
import { AdmindashboardComponent } from './adminDashboard/admindashboard/admindashboard.component';
import { AdminsidenavComponent } from './adminDashboard/adminsidenav/adminsidenav.component';
import { AdminlubricantsComponent } from './adminDashboard/adminlubricants/adminlubricants.component';
import { LubricantComponent } from './adminDashboard/adminlubricants/lubricant/lubricant.component';
import { LubricantListComponent } from './adminDashboard/adminlubricants/lubricant-list/lubricant-list.component';
import { LubricantService } from './shared/lubricant.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    ForgotPassordComponent,
    VerifyEmailComponent,
    NavbarComponent,
    HomepageComponent,
    SidenavComponent,
    ProfileComponent,
    VehiclesComponent,
    VehicleComponent,
    VehicleListComponent,
    GenerateqrComponent,
    LubricantsComponent,
    AdmindashboardComponent,
    AdminsidenavComponent,
    AdminlubricantsComponent,
    LubricantComponent,
    LubricantListComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,environment.configs),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    QRCodeModule,
    ZXingScannerModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,VehicleService,LubricantService],
  bootstrap: [AppComponent]
})
export class AppModule { }  
