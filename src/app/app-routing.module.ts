import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { HomeComponent } from './component/shared/home/home.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UserhomeComponent } from './component/user/userhome/userhome.component';
import { ShopComponent } from './component/shopping/shop/shop.component';

import { SubcategoryComponent } from './component/shopping/subcategory/subcategory.component';
import { ProductsComponent } from './component/shopping/products/products.component';
import { ProductDetailComponent } from './component/shopping/product-detail/product-detail.component';
import { CartComponent } from './component/shopping/cart/cart.component';

const routes: Routes = [ 
		{path:'home',component:HomeComponent},
		{path:'login',component: LoginComponent },
  		{path:'signup',component: SignupComponent},
  		{path:'userhome',component:UserhomeComponent,canActivate:[AuthGuard]},
  		{path: 'shop',component:ShopComponent},
  		
  		  {path:'subcategory/:cid',component:SubcategoryComponent},
		  {path:'products/:subcategoryId',component: ProductsComponent},
		  {path:'product_Detail/:productId',component: ProductDetailComponent},
		  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
