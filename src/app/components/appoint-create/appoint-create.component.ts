import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appoint-create',
  templateUrl: './appoint-create.component.html',
  styleUrls: ['./appoint-create.component.css']
})
export class AppointCreateComponent implements OnInit {
@Output() newAppoint = new EventEmitter<any>();

  name:string = '';
  date:string = '';
  time:string = '';
  symptom:string = '';

  invalidForm:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  addAppointment(){
    if(this.name == '' || this.date == '' || this.time == '' || this.symptom == ''){
      this.invalidForm = true;
      return;
    }else{
      this.invalidForm = false;
      //CREATE AN APPOINTMENT OBJECT
      const appointment = {
        name: this.name,
        date: this.date,
        time: this.time,
        symptom: this.symptom
      }
      this.newAppoint.emit(appointment);
      this.resetFields();
    }
  }

  resetFields(){
    this.name = '';
    this.date = '';
    this.time = '';
    this.symptom = '';
  }
}
