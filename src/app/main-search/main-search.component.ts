import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TdisplayService } from '../tdisplay.service';


@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  
  mainIP: any;

  @ViewChild('searchField')
  searchField!: ElementRef;
  
  constructor(private router: Router, private dispService: TdisplayService) {
   }


  async ngOnInit(): Promise<void> {
    this.mainIP = await this.dispService.getIP();
  }

  onKeydown(event: KeyboardEvent) {
    const inHTML = this.searchField.nativeElement.value;
    if (event.key == "Enter") {
      this.router.navigate(['/results', {searchPass: inHTML, ipo: this.mainIP}]);
    }
  }

}
