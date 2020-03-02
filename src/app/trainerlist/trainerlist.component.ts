import { Component, OnInit } from '@angular/core';
import { Fitness } from '../fitness';
import { Observable } from 'rxjs';
import { FitnessService } from '../fitness.service';

@Component({
  selector: 'app-trainerlist',
  templateUrl: './trainerlist.component.html',
  styleUrls: ['./trainerlist.component.css']
})
export class TrainerlistComponent implements OnInit {
  
  
//fitnessservice:FitnessService=new FitnessService();
  constructor( private fitnessservice:FitnessService) { }
trainerlist:Observable<any[]>;
ngOnInit() {

  this.fitnessservice.getAllAppointment().subscribe(data=>
    {

   

    

    this.trainerlist=data;

   });



  



}
}
