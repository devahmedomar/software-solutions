import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {
  whyData:any[]=[]

  constructor(private _HomeService:HomeService){}
  getWhy(){
    this._HomeService.getHomeData().subscribe({
      next:(res)=>{
        this.whyData = res.why
      },
      error:()=>{}
    })
  }
ngOnInit(): void {
  Aos.init({startEvent: 'scroll'})
  this.getWhy();

}
}
