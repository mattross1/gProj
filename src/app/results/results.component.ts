import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdisplayService } from '../tdisplay.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  dataArr:any[] = [];

  constructor(private dispService: TdisplayService, private actr: ActivatedRoute) {
    this.actr.queryParams.subscribe((para) => {
      console.log('HERE AT THE RESULTS', this.actr.snapshot.params['searchPass']);
    })
   }
  ngOnInit(): void {
    this.resRetrieve();
  }

  resRetrieve() {
    this.dispService.retrieve().subscribe(subdat => {const lst=subdat.split('\n');
  lst.forEach(i => {this.dataArr.push(i)})})
  }

}
