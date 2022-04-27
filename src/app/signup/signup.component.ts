import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TdisplayService } from '../tdisplay.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('firstField')
  firstField!: ElementRef;
  @ViewChild('lastField')
  lastField!: ElementRef;
  @ViewChild('emailField')
  emailField!: ElementRef;
  @ViewChild('phoneField')
  phoneField!: ElementRef;

  constructor(private dispService: TdisplayService) { 
  }

  ngOnInit(): void {
  }

  submitFunction() {
    const firstHTML = this.firstField.nativeElement.value;
    const lastHTML = this.lastField.nativeElement.value;
    const emailHTML = this.emailField.nativeElement.value;
    const phoneHTML = this.phoneField.nativeElement.value;
    this.dispService.signupFun(firstHTML, lastHTML, emailHTML, phoneHTML);
    
  }

}
