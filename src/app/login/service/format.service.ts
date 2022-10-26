import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }
  getFormated(text: String) {
    return text.toUpperCase();
  }
}
