import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/modules/landing/services/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactsData:any[] = []
  portfolios: any[]=[];
  constructor(private _HomeService:HomeService){}
  getFooterData(){
    this._HomeService.getHomeData().subscribe({
      next:(res)=>{
        this.contactsData = res.contacts;
      }


    })

  }
  getAbout(){
    this._HomeService.getHomeData().subscribe({
      next:(res)=>{
        this.portfolios = res.portfolios;
      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
  ngOnInit(): void {
    this.getFooterData()
    this.getAbout()
  }


}
