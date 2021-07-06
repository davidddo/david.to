import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
  ],
})
export class MaterialModule {}
