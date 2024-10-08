import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { CategoryCardComponent } from '../../../shared/components/category-card/category-card.component';
import { CarruselComponent } from '../../../shared/components/carrusel/carrusel.component';
import { CompanyInformationComponent } from '../../../shared/components/company-information/company-information.component';


@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, ProductCardComponent, CategoryCardComponent, CarruselComponent, CompanyInformationComponent],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent {

}
