import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import {CartService} from "../services/cart/cart.service";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  isAuthenticated: boolean = false;
  food!: Food;

  constructor(private activatedRoute: ActivatedRoute,
              private foodService: FoodService,
              private cartService: CartService,
              private authService: AuthService,
              private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    })
  }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
