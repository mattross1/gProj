import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
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


  constructor(private dispService: TdisplayService, private msgService: MessageService) {
  }

  ngOnInit(): void {
  }

  submitFunction(e: { preventDefault: () => void; }) {
    e.preventDefault();
    let outObj = '';
    const firstHTML = this.firstField.nativeElement.value;
    const lastHTML = this.lastField.nativeElement.value;
    const emailHTML = this.emailField.nativeElement.value;
    const phoneHTML = this.phoneField.nativeElement.value;
    this.dispService.signupFun(firstHTML, lastHTML, emailHTML, phoneHTML).toPromise().then(subdat => {
      this.msgService.successFun("Signed Up", "Created");
      console.log('success.signup')

    }).catch(err => {
      this.msgService.errorFun("Signup Error", "Error");
      console.log('fail.signup')
    })

  }

}
