import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'software-solutions';
  constructor(private spinner: NgxSpinnerService) {}
  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 4000);
  }
  ngOnInit(): void {
    Aos.init();
    this.showSpinner()
  }
}
