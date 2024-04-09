import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  slides:any[]=[];

  constructor(private _HomeService: HomeService) { }
  getTesti() {
    this._HomeService.getHomeData().subscribe({
      next: (res) => {
        for (let index = 0; index < res.teams.length; index++) {
          console.log(res.teams[index]?.image);
          this.slides.push({
            img: "https://admin.fivesolutions.net/images/Founders/"+res.teams[index]?.image,
            name: res.teams[index]?.name,
            job_name: res.teams[index]?.job_name,
            rate: res.teams[index]?.rate|0
          })
        }
      },
      error: () => { }
    })

  }
  ngOnInit(): void {
    Aos.init({startEvent: 'scroll'})
    this.getTesti()

  }
}
