import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './page/product/product.component';
import { PostsComponent } from './page/posts/posts.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PostsComponent,
    ProductDetailComponent,
    ProductAddComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      // {path: 'posts', component: PostsComponent},
      // {path: 'products', component: ProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
