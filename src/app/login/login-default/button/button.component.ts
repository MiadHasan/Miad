import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  @Output() pressed = new EventEmitter();
  onClick() {
    this.pressed.emit()
  }

}
