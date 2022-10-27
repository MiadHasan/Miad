import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit {

  constructor() {
    console.log(this.data);
   }
  @Input() data : any;
  ngOnInit(): void {
  }
}
