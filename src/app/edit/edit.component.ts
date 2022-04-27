import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TdisplayService } from '../tdisplay.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('phoneUpField')
  phoneUpField!: ElementRef;
  @ViewChild('punchUpField')
  punchUpField!: ElementRef;

  constructor(private dispService: TdisplayService) {
    this.dispService.getIP();
   }

  ngOnInit(): void {
    
  }

  updateSubmitFunction() {
    const phoneUpHTML = this.phoneUpField.nativeElement.value;
    const punchUpHTML = this.punchUpField.nativeElement.value;
    this.dispService.updateFun(phoneUpHTML, punchUpHTML);
  }

}
