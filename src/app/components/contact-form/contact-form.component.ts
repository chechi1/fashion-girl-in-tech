import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  comment: any;
  emailaddrs: any;
  phonenum: any;
  lname: any;
  fname: any;
  email_sent = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    this.email_sent = false;
    const formData = { name: this.fname + '' + this.lname, email: this.emailaddrs, phone: this.phonenum, message: this.comment };
    this.http.post('https://formspree.io/f/mbjelebp', formData).subscribe(
      (response) => {
        this.email_sent = true;
        console.log(response);
        form.resetForm();
      },
      (error) => console.log(error)
    );
  }
}
