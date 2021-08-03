import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './page/posts/posts.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductComponent } from './page/product/product.component';

const routes: Routes = [
  // {path: 'posts', component: PostsComponent},
  {path: 'products', component: ProductComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'addproduct', component: ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
