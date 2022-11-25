import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ChipsListComponent } from './components/chips-list/chips-list.component';
import { ChipsListComponentModule } from './components/chips-list/chips-list.component-module';
import { ChipsServiceModule } from './services/chips.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoriesListComponent },{ path: 'crypto', component: ChipsListComponent }]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule, ChipsListComponentModule, ChipsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
