import { Component, OnInit } from '@angular/core';
import { FormatService } from '../../service/format.service';
import { ShareDataService } from 'src/app/service/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  constructor(private formatService: FormatService, private storeService: ShareDataService, private router: Router) {
  }

  ngOnInit(): void {
  }
  onClick(userName : string) { 
    userName = this.formatService.getFormated(userName);
    this.storeService.setName(userName);
    this.router.navigate(['home']);
  }
}
