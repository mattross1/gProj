import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdisplayService } from '../tdisplay.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  dataArr: any[] = [];
  searchPass: string | undefined;
  hdr = ["id", "first", "last", "email", "phone", "punches"];

  constructor(private dispService: TdisplayService, private actr: ActivatedRoute) {
    this.actr.queryParams.subscribe((para) => {
      this.searchPass = this.actr.snapshot.params['searchPass'];

    })
   }
  ngOnInit(): void {
    this.dispService.getIP();
    this.resRetrieve();
  }

  async resRetrieve() {
    await this.dispService.search(this.searchPass).subscribe(subdat => {
      const lst = subdat.split('\n');
      
      lst.forEach((i: any) => { this.dataArr.push(JSON.parse(i)); });
      this.dataArr = this.dataArr[0];
    });
    console.log(this.dataArr)
  }

}
