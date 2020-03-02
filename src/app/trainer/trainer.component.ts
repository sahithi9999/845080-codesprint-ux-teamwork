import { Component, OnInit } from '@angular/core';
import { FitnessService } from '../fitness.service';
import { Fitness } from '../fitness';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  submitted: boolean;

  constructor(private router:Router, private fitnessservice:FitnessService) { }
appointment: Fitness=new Fitness();
  ngOnInit() {
    this.submitted=false; 
  }
  appointmentsaveform=new FormGroup({
    firstname:new FormControl('',[Validators.required , Validators.minLength(5),Validators.pattern("^[a-zA-Z]{5,10}$") ]) ,  
    lastname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{5,10}$") ]),
  
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60) ]) ,
  
    email:new FormControl('',[Validators.required,Validators.email]),
  
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]{10}")]),
  
    streetaddress:new FormControl('',[Validators.required]),
  
    city:new FormControl('',[Validators.required]),
  
    state:new FormControl('',[Validators.required]),
  
    country:new FormControl('',[Validators.required]),
  
   });
  
   saveFitness(saveFitness){
  
    this.appointment=new Fitness();
  
    this.appointment.firstname=this.Firstname.value;
  
    this.appointment.lastname=this.Lastname.value;
  
    this.appointment.phone=this.Phone.value;
  
    this.appointment.city=this.City.value;  
      this.appointment.streetaddress=this.Streetaddress.value;


  
    this.submitted = true;
    this.save();
  
   }
   save() {

    this.fitnessservice.saveAppointment(this.appointment)
  
     .subscribe(data => console.log(data), error => console.log(error));
     this.router.navigate(['home']);
  
    
  
   }  
    get Firstname(){
  
    return this.appointmentsaveform.get('firstname');
  
    }
  
    get Lastname(){
  
    return this.appointmentsaveform.get('lastname');
  
    }
  
    get Age(){
  
    return this.appointmentsaveform.get('age');
  
    }
  
    get Email(){
  
    return this.appointmentsaveform.get('email');
  
    }
  
    get Phone(){
  
    return this.appointmentsaveform.get('phone');
  
    }
  
    get Streetaddress(){
  
    return this.appointmentsaveform.get('streetaddress');
  
    }
  
    get City(){
  
    return this.appointmentsaveform.get('city');
  
    }
  
    get State(){
  
    return this.appointmentsaveform.get('state');
  
    }
  
    get Country(){
  
    return this.appointmentsaveform.get('country');
  
    }
    saveAppointmentForm(){
    this.submitted=false;
    this.appointmentsaveform.reset();
  
    }
  
  }
  