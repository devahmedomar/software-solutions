import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Aos from 'aos';
import { HomeService } from '../../services/home.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _HomeService: HomeService,private _ToastrService:ToastrService) { }
  emailFormGroup: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required])
  })

  onSubscribe() {
    if (this.emailFormGroup.valid) {
      let emailValue = this.emailFormGroup.get("email")?.value;
      const formData = new FormData();
      formData.append('email', emailValue);
      this._HomeService.addEmail(formData).subscribe({
        next: (res) => {
          console.log(res);
          // window.alert("hello")
          this._ToastrService.success("Successfully Subscibed");
        },
        error: (err) => {
          console.log(err);
          this._ToastrService.error(err)
        }
      })

    }
    else {
      this._ToastrService.error("Enter Valid Email Address")

    }
  }




  ngOnInit(): void {
    Aos.init({ startEvent: 'scroll' })

  }
}
