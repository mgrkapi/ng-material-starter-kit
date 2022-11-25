import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ChipsListComponent } from './components/chips-list/chips-list.component';
import { HolidaysListComponent } from './components/holidays-list/holidays-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ChipsListComponentModule } from './components/chips-list/chips-list.component-module';
import { ChipsServiceModule } from './services/chips.service-module';
import { HolidaysListComponentModule } from './components/holidays-list/holidays-list.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoriesListComponent }, { path: 'crypto', component: ChipsListComponent }, { path: 'public-holidays', component: HolidaysListComponent }]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule, ChipsListComponentModule, ChipsServiceModule, HolidaysListComponentModule, HolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
