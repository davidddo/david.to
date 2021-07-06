import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatExpansionModule],
  exports: [MatButtonModule, MatCardModule, MatExpansionModule],
})
export class MaterialModule {}
