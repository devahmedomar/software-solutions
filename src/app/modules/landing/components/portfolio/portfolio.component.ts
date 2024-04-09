import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios:any[] = [];
  constructor(private _HomeService:HomeService){}
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
    this.getAbout()
    Aos.init({startEvent: 'scroll'})

  }
}
