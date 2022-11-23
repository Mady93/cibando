import { Router } from '@angular/router';
// components/user/login
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faMailBulk, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHouzz } from '@fortawesome/free-brands-svg-icons';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  iconaHome = faHouzz;
  iconaSchedaRicette = faNewspaper;
  iconaMail = faMailBulk;
  iconaRegistered = faRegistered;
  search = faSearch;
  nuovaRicetta = faAdd;

  //collapse navbar
  isCollapsed = true;

  // components/service/user
  user: any;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('user')!) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
