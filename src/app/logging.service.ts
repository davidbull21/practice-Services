import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  onstatusChange(status:string) {
    console.log(`A status change occured, the new status is ${status}`);
  }
}
