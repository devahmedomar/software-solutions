import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { HomeService } from '../../services/home.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services:any[]=[]
  constructor(private _HomeService:HomeService,private spinner: NgxSpinnerService){}
  getServ(){
    this.spinner.show()
    this._HomeService.getHomeData().subscribe({
      next:(res)=>{
        this.spinner.hide()

        res.services.forEach((ele: any) => {
          this.services.push({ title:ele.title, content: ele.body,image:"https://admin.fivesolutions.net/images/setting/"+ele.image[0]?.file_name, active: false })

        });
        this.services[0].active=true
        console.log(this.services);


      },
      error:()=>{
        this.spinner.hide()
      }
    })

  }
  ngOnInit(): void {
    Aos.init({startEvent: 'scroll'})
    this.getServ()
  }



  selectTab(tab: any): void {
    this.services.forEach(t => t.active = false);
    tab.active = true;
  }
}
