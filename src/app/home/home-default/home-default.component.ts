import { Component, OnInit } from '@angular/core';
import {ShareDataService} from '../../service/share-data.service';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-home-default',
  templateUrl: './home-default.component.html',
  styleUrls: ['./home-default.component.scss']
})
export class HomeDefaultComponent implements OnInit {

  userName: string = ''
  constructor(private nameService: ShareDataService, private apiData: ApiService) {
    this.userName = nameService.getName();
  }
  itemList : any = ''
  ngOnInit(): void {
    this.apiData.getData().subscribe(res => {
      this.itemList = Object.keys(res);
      // for(const i in this.itemList){
      //   console.log(i);
      // }
    })
  }

}
