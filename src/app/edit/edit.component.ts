import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../message.service';
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

  constructor(private dispService: TdisplayService, private msgService: MessageService) {
    this.dispService.getIP();
   }

  ngOnInit(): void {
    
  }

  updateSubmitFunction(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const phoneUpHTML = this.phoneUpField.nativeElement.value;
    const punchUpHTML = this.punchUpField.nativeElement.value;
    this.dispService.updateFun(phoneUpHTML, punchUpHTML).toPromise().then(subdat => {
      if (JSON.parse(subdat).affectedRows == '0')
      {
        this.msgService.errorFun("Edit Error", "Error");
        console.log('fail.edit')
      }
      
      else {
      this.msgService.successFun("Edit Success", "Edited");
      console.log('success.edit')
      }

    }).catch(err => {
      this.msgService.errorFun("Edit Error", "Error");
      console.log('fail.edit')
    })
  }

}
