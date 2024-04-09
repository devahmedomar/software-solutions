import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  img: string = "";
  name: string = "";
  title: string = "";
  slides: any[] = [];
  slideConfig: object = {}
  constructor(private _HomeService: HomeService) { }
  getTeam() {
    this._HomeService.getHomeData().subscribe({
      next: (res) => {
        for (let index = 0; index < res.founders?.length; index++) {
          console.log(res.founders[index]?.image);
          this.slides.push({
            img: "https://admin.fivesolutions.net/images/Teams/"+res.founders[index]?.image,
            name: res.founders[index]?.name,
            job_name: res.founders[index]?.job_name,
          })

        }
        console.log(this.slides);

        this.slideConfig = {
          "slidesToShow": 3, "slidesToScroll": 3, dots: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }

          ]
        };
      },
      error: () => { }
    })

  }
  ngOnInit(): void {
    Aos.init({ startEvent: 'scroll' })
    this.getTeam()
  }



}
``
