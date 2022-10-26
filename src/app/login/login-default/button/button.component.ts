import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { console.log('button') }
  value: any = ''
  ngOnInit(): void {
  }
  @Input() inputValue:any
  onClick() {
    this.value = this.inputValue;
    console.log('clicked')
    this.inputValue = ''
  }

}
