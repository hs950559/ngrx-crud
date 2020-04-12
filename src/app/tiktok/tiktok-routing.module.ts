import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiktokComponent } from './tiktok.component';

const routes: Routes = [
  {
    path: '',
    component: TiktokComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiktokRoutingModule {}
