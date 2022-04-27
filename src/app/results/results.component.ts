import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdisplayService } from '../tdisplay.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  dataArr: String= '';
  searchPass: string | undefined;

  constructor(private dispService: TdisplayService, private actr: ActivatedRoute) {
    this.actr.queryParams.subscribe((para) => {
      this.searchPass = this.actr.snapshot.params['searchPass'];
    })
   }
  ngOnInit(): void {
    this.resRetrieve();
  }

  resRetrieve() {
    this.dispService.search(this.searchPass).subscribe(subdat => {
      console.log(subdat)
    });
  }

}
