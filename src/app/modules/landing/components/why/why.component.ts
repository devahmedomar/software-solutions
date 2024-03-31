import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {
ngOnInit(): void {
  Aos.init({startEvent: 'scroll'})

}
}
