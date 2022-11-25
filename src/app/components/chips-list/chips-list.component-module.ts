import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsListComponent } from './chips-list.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule],
  declarations: [ChipsListComponent],
  providers: [],
  exports: [ChipsListComponent]
})
export class ChipsListComponentModule {
}
