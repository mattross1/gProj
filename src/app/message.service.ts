import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toast: ToastrService) { }

  successFun(msgIn: string | undefined, label: string | undefined) {
    this.toast.success(msgIn, label)
  }

  errorFun(msgIn: string | undefined, label: string | undefined) {
    this.toast.error(msgIn, label)
  }
  

}
