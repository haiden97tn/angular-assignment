import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from './product';

// import { productData } from 'src/data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  parentMessage: string = "Message from parent";

  id: number = 0;
  valueInput: string = '';
  image: string = '';
  title: string = '';
  price: number = 0;
  status: boolean = true;


  detailPro: any;

  listProduct: any = []

  vote: number = 0;

  constructor(
    private productService: ProductService
  ){
    this.productService.getAll().subscribe(data => {
      this.listProduct = data.data
    })
  }

  ngOnInit(): void {
    console.log(this.productService.getProducts());

    this.getListPro();
  }
  getListPro(){
    this.productService.getAll().subscribe(data => {
      console.log(data.data)
      this.listProduct = data.data
    })
  }

  onRemove(data: any){
    // var result = this.listProduct.filter(x => {
    //   return x.id != id
    // })
    // console.log(result)
    // this.listProduct = result;
    var id = data._id;

    this.productService.delete(id).subscribe(data => {
      console.log(data);
      this.getListPro();
    })
  }
  voteCount(value: any){
    this.vote = value;
  }

  onUpdate(data: any){

    this.detailPro = data;
    console.log(this.detailPro)
    this.id = data.id;
    this.image = data.image;
    this.title = data.title;
    this.price = data.price;
    this.status = data.status;
  }
  onUpdatePro(id: any){
    // if(!this.image || !this.title || !this.price ){
    //   alert('Hãy nhập đầy đủ thông tin sản phẩm');
    //   return
    // }
    // var newList = this.listProduct.filter(x => {
    //   return x.id != id;
    // })
    // var data = {
    //   id: id,
    //   image: this.image,
    //   title: this.title,
    //   price: this.price,
    //   status: this.status
    // }
    // // newList.push(data);
    // this.listProduct = newList;
    // this.id = 0;
    // this.image = '';
    // this.title = '';
    // this.price = 0;
    // this.status = false;
  }

  onAddPro(data: any){
    this.productService.create(data).subscribe(data => {
      console.log(data);
      this.getListPro()
    })
  }

}
