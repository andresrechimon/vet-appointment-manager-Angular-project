import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listAppoint:any[] = [];

  addAppoint(appointment:any){
    this.listAppoint.push(appointment);
  }

  deleteAppointFromList(i:number){
    this.listAppoint.splice(i, 1);
  }
}
