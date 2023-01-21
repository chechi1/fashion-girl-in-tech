import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-core/common/header/header.component';
import { FooterComponent } from './app-core/common/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotpasswordComponent } from './components/auth/forgotpassword/forgotpassword.component';
import { ProductListComponent } from './components/marketplace/product-list/product-list.component';
import { ProductDetailsComponent } from './components/marketplace/product-details/product-details.component';
import { AddToCartComponent } from './components/cart/add-to-cart/add-to-cart.component';
import { WishlistComponent } from './components/cart/wishlist/wishlist.component';
import { PaymentComponent } from './components/transactions/payment/payment.component';
import { HistoryComponent } from './components/transactions/transaction-history/history.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AddToCartComponent,
    WishlistComponent,
    PaymentComponent,
    HistoryComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
