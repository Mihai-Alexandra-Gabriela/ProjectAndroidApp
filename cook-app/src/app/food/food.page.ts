import { Component, OnInit } from '@angular/core';
//ceva db ing??
import { ApiService } from "src/app/api/api.service";
@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllProducts().subscribe(res => {
      console.log(res);
    });
  }

}
