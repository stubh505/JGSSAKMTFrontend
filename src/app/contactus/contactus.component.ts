import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactUsService } from './contactus.service';
import { faPhone, faMobile, faMapPin, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
}) 

export class ContactusComponent implements OnInit {
  faPhone = faPhone;
  faMobile = faMobile;
  faMapPin = faMapPin;
  faMailBulk = faMailBulk;
  errorMessage: any;
  successMessage: any;
  contactUsForm: FormGroup;
  
  constructor(private fb:FormBuilder, private service:ContactUsService, private titleService:Title) { 
    this.titleService.setTitle("Contact Us");
  }

  ngOnInit() : void {
    this.contactUsForm=this.fb.group({
      name:['', Validators.required],
      mobile:['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      email:['', [Validators.required, Validators.email]],
      message:['', Validators.required]
    })
  }

  contactUs() {
    this.errorMessage=null;
    this.successMessage=null;
    this.service.contactUs(this.contactUsForm.value).subscribe(
      response=>{
        this.successMessage=response
        this.contactUsForm.reset();
      },
      error=>{this.errorMessage=error.error.message}
    );
  }

}
