import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../product/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() data: any;
  infoPro: any;
  idPro: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.idPro = this.route.snapshot.params.id;
    this.productService.detail(this.idPro).subscribe(data => {
      this.infoPro = data;
      console.log(this.infoPro);

    }, error => {
      console.log(error);
    })
  }
  onUpdatePro(){
    var id = this.idPro

    var body = {
      name: this.infoPro.name,
      price: this.infoPro.price,
      image: this.infoPro.image,
      quantity: this.infoPro.quantity,
      status: this.infoPro.status
    }
    console.log(body);
    this.productService.update(id, body).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/products'])
    })

  }

}
