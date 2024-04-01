import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
    ngOnInit(): void {
        Aos.init({startEvent: 'scroll'})
      }
  slides = [
    {img: "assets/images/team/1.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/2.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/3.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/2.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/3.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/2.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/3.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/2.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/3.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/2.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/3.png",name:"Ahmed Omar",title:"Frontend Web Developer"},
    {img: "assets/images/team/2.png",name:"Ahmed Omar",title:"Frontend Web Developer"},

  ];
  slideConfig = {"slidesToShow": 3, "slidesToScroll": 3,dots:true,
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
  
}
