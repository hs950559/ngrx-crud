import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiktokRoutingModule } from './tiktok-routing.module';
import { TiktokComponent } from './tiktok.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TiktokService } from './services/tiktok.service';

@NgModule({
  declarations: [TiktokComponent],
  imports: [CommonModule, TiktokRoutingModule, ReactiveFormsModule],
  providers: [TiktokService],
})
export class TiktokModule {}
