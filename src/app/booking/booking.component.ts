import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../app.component';
import { Car } from '../car';
import { CarDetailService } from '../car-detail.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
id:number;
cars:Car[];
car:Car;
  constructor(private activatedRoute:ActivatedRoute,private api:APIService) { }

  ngOnInit(): void {
    //this.cars=this.api.getCars()
    this.activatedRoute.params.subscribe(data=>{console.log(data),
    this.id=data.id
    console.log(this.id)
    })
    this.cars=this.api.getCar(this.id)
    this.car=this.cars[0];
  console.log(this.cars)

   

  }
  

  

}
