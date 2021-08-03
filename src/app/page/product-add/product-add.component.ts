import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  id: number = 0;
  valueInput: string = '';
  image: string = '';
  name: string = '';
  price: number = 0;
  status: boolean = true;
  quantity: number = 0;

  @Output() dataNew = new EventEmitter()
  @Input() data: any;

  constructor(
    private productService : ProductService,
    private router: Router
  ) {
    console.log(this.data);

   }

  ngOnInit(): void {
  }
  onAdd(){
    var body = {
      name: this.name,
      price: this.price,
      image: this.image,
      status: this.status,
      categoryId: "60b4507fcf45f22d28889706",
      count: 1,
      quantity: this.quantity,
    }
    // this.dataNew.emit(body)
    console.log(body);
    this.productService.create(body).subscribe(data => {
      console.log(data);
      this.router.navigate(['/products'])
    })

  }
  onUpdatePro(){

  }

}
