import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  

  sucess: boolean = true;
  LandSucc: boolean = true;
  showError!: string;
  name='Arun kumar';
  
  constructor(private http:FlightserviceService) { }

  flightData: any = []
  dev_name = "Arun kumar";

  ngOnInit() {
    this.http.fetchFlights().subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      if (this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }

  
  sendYear(year: any): void {
    console.log(year);
    this.http.fetchAll(year, this.sucess, this.LandSucc).subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      console.log("sucees :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }
  sendSuccess(succ: any) {
    this.sucess = succ;
    //console.log(succ);
    this.http.fetchLanchSucess(succ).subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      console.log("sucees :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }
  LandSuccLuanchSucc(val: any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data => {
      // console.log("responce recived ",data),
      this.flightData = data;
      console.log("Land :", this.flightData)
      // error=>console.log("exception recoved ")
    })
  }
}
