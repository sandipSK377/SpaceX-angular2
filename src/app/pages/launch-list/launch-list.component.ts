import { Component, OnInit } from '@angular/core';
import { LaunchService } from 'src/app/core/services/launch.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {

  launchData: any[]=[];
  loading:boolean=false;
  year:any;
  constructor(private launchService: LaunchService) { }

  ngOnInit() {
    this.getLaunchData();
  }
  receiveMessage($event) {
    this.year = $event;
    this.getLaunchData();
  }

  getLaunchData(){
    this.loading=true;
   let  queryUrl;
    if(this.year){
      queryUrl='?limit=100'+'&launch_year='+this.year;
    }else{
       queryUrl='?limit=100';
    }
    this.launchService.getLaunches(queryUrl).subscribe(res=>{
      this.loading=false;
      if(res){
        this.launchData=res;
      }
    })
  }

}
