import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fitness } from './fitness';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  constructor(private http:HttpClient) { }

  saveAppointment(Fitness:any):any{
  {
    return this.http.post("http://localhost:3000/fitness",Fitness);
  }
}
  getAllAppointment():Observable<any>{
    {
      return this.http.get("http://localhost:3000/fitness");
    }

}
}
