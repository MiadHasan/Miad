import { Component, OnInit } from '@angular/core';
import { FormatService } from '../../service/format.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  inputValue: any = '';
  constructor() {
  }

  ngOnInit(): void {
  }
  service = new FormatService();
  onKey(event : any) { 
    this.inputValue = this.service.getFormated(event.target.value)
  }
}
