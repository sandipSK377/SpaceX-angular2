import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
years:any[]=[];
year:any;
@Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.initYears(2006,2020);
  }
  filterByYear(year){
      this.messageEvent.emit(year);

  }
  clear(){
    this.messageEvent.emit(null);
  }

  initYears(min,max){
    for(let i=min;i<=max;i++){
      this.years.push(i);
    }

  }

}
