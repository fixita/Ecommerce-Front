import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuOpen = false;
  tabSelect = 0;

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  selectTab(tabIndex: number) {
    this.tabSelect = (this.tabSelect === tabIndex) ? 0 : tabIndex;
  }
}
