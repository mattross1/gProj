import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent implements OnInit {
  @ViewChild('searchField')
  searchField!: ElementRef;
  
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  onKeydown(event: KeyboardEvent) {
    const inHTML = this.searchField.nativeElement.value;
    if (event.key == "Enter") {
      this.router.navigate(['/results', {searchPass: inHTML}]);
    }
  }

}
