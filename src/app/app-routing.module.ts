import { ProductListComponent } from './components/marketplace/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/marketplace/product-details/product-details.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
