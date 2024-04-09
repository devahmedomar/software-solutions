import { Component } from '@angular/core';
import { HomeService } from 'src/app/modules/landing/services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  contactsData:any[] = []
  constructor(private _HomeService:HomeService){}
  getHeaderData(){
    this._HomeService.getHomeData().subscribe({
      next:(res)=>{
        this.contactsData = res.contacts;
      }


    })

  }
  ngOnInit(): void {
    this.getHeaderData()
  }
}
