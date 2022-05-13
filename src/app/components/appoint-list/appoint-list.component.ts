import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appoint-list',
  templateUrl: './appoint-list.component.html',
  styleUrls: ['./appoint-list.component.css']
})
export class AppointListComponent implements OnInit {
@Input() listAppoint:any;

@Output() deleteAppoint = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteAppointment(i:number){
    this.deleteAppoint.emit(i);
  }
}
