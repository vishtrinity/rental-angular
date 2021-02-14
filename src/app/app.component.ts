import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from './car';
import cars_data from './data';



export class APIService {
  
  private data: any;

  constructor() {
    this.data = cars_data
  }

  public getCars():Car[] {
    return this.data;
  }

  public getCar(id: number):Car[] {
    return this.getCars().filter((c:Car)=>(c.id===id));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIService]
})
export class AppComponent {

  // your code here
  cars;
  constructor(private api:APIService,private router:Router){}

ngOnInit(): void {
this.cars=this.api.getCars();
  
}
getCarDetails(id){
  this.router.navigate(['/bookNow', id])
}

}
