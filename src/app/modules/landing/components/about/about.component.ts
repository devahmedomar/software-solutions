import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { HomeService } from '../../services/home.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = "";
  body: string = "";
  aboutImages: any[] = [];
  constructor(private _HomeService: HomeService,private spinner: NgxSpinnerService) {

  }
  getAbout() {
    this.spinner.show()
    this._HomeService.getHomeData().subscribe({
      next: (res) => {
        this.spinner.hide()
        this.title = res.about[0]?.title;
        this.body = res.about[0]?.body;

        this.aboutImages = res.about[0].image


      },
      error: (err) => {
        console.log(err);
        this.spinner.hide()

      }
    })
  }
  ngOnInit(): void {
    Aos.init({ startEvent: 'scroll' })
    this.getAbout()
  }
}
