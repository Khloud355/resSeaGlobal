import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatnershipComponent } from './pages/patnership/patnership.component';
import { RouterModule, Routes } from '@angular/router';
import { PartnershipDetailsComponent } from './pages/patnership/partnership-details/partnership-details.component';
import { PatnershipVisionComponent } from './pages/patnership/patnership-vision/patnership-vision.component';
import { PartnershipCardComponent } from '../../shared/components/partnership-card/partnership-card.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: PatnershipComponent,
    data: {
      bg: '../../../assets/images/red-sea-global-stock.webp',
    },
  },
  {
    path: 'details/:id',
    component: PartnershipDetailsComponent,
    data: {
      animation: 'slideUp',
      splitLayout: true,
    },
  },
  {
    path: 'vision/:id',
    component: PatnershipVisionComponent,
    data: {},
  },
];
@NgModule({
  declarations: [PatnershipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PartnershipCardComponent,
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class PatnershipsModule {}
