import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TdisplayService } from '../tdisplay.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  @ViewChild('phoneRemField')
  phoneRemField!: ElementRef;

  constructor(private dispService: TdisplayService) {
    this.dispService.getIP();
  }

  ngOnInit(): void {
    
  }

  removeSubmitFunction() {
    const phoneRemHTML = this.phoneRemField.nativeElement.value;
    this.dispService.removeFun(phoneRemHTML);
  }

}
