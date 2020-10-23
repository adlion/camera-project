import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  public toastr$ = new BehaviorSubject(null);
  
  showToastr(message:string,color:"red"|"green",show:boolean){
    this.toastr$.next({message:message,color:color,show:show})
    setTimeout(() => {
    this.toastr$.next({message:message,color:color,show:false})
    }, 3000);
  }

}
