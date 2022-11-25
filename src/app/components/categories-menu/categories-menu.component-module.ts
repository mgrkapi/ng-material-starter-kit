import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CategoriesMenuComponent } from './categories-menu.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatMenuModule, CommonModule],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
