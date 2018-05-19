import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.route'
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { GuestsComponent } from './components/guests/guests.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { AddUserComponent } from './components/add-user/add-user.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        LandingComponent,
        DashboardComponent,
        UsersComponent,
        GuestsComponent,
        AttendeesComponent,
        AddUserComponent
    ],
    imports: [
        BrowserModule,
        routing,
        NgbModule.forRoot(),
        FusionChartsModule,
        NgxDatatableModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
