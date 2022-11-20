import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faMailBulk, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import{ faRegistered} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconaHome = faHouzz;
  iconaSchedaRicette = faNewspaper;
  iconaMail = faMailBulk;
  iconaRegistered = faRegistered;
  search = faSearch;
  //collapse navbar
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
