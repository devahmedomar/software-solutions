import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title:string = "";
  body:string = "";
  image:string = "";
  constructor(private _HomeService:HomeService){}


  getHeaders(){
    this._HomeService.getHomeData().subscribe({
      next:(res)=>{
        this.title = res.headers[0].title;
        this.body = res.headers[0].body;
        this.image = environment.apiUrl +"/images/headers" + res.headers[0].image;
        console.log();

      },
      error:(err)=>{
        console.log(err);

      }
    })
  }
  ngOnInit(): void {
    AOS.init();
    this.getHeaders()
  }
}
