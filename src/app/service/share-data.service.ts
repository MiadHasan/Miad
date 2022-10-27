import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }
  userName: string = ''

  setName(name: string) {
    this.userName = name
  }
  getName() : string {
    return this.userName;
  }
}
