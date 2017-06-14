import { FishDetailComponent } from 'app/fish-detail/fish-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'app/button/button.module';

@NgModule({
  declarations: [FishDetailComponent],
  imports: [
    ButtonModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FishDetailComponent,
      pathMatch: 'full'
    }])
  ]
})
export class FishDetailModule {}
