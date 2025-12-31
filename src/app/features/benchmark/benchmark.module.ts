import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BenchmarkPageComponent } from './pages/benchmark-page/benchmark-page.component';

const routes: Routes = [
  {
    path: '',
    component: BenchmarkPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class BenchmarkModule {}
