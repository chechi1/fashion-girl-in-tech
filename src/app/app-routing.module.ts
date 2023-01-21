import { ProductListComponent } from './components/marketplace/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path: 'products', component:ProductListComponent},
  {path: "products/:id, component: ProductDetailComponent"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
