import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { Product } from '../domain/product';
import { ProductService } from '../services/productservice';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ProductService],
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    OrderListModule,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ranking-da-comunidade-donos-da-bala';
}
