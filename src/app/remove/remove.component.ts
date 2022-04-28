import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
import { TdisplayService } from '../tdisplay.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  @ViewChild('phoneRemField')
  phoneRemField!: ElementRef;

  constructor(private dispService: TdisplayService, private msgService: MessageService) {
    this.dispService.getIP();
  }

  ngOnInit(): void {
    
  }

  removeSubmitFunction(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const phoneRemHTML = this.phoneRemField.nativeElement.value;
    this.dispService.removeFun(phoneRemHTML).toPromise().then(subdat => {
      if (JSON.parse(subdat).affectedRows == '0')
      {
        this.msgService.errorFun("Remove Error", "Error");
        console.log('fail.remove')
      }
      
      else {
      this.msgService.successFun("Remove Success", "Removed");
      console.log('success.remove')
      }

    }).catch(err => {
      this.msgService.errorFun("Remove Error", "Error");
      console.log('fail.remove')
    })
  }

}
