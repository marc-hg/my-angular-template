import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitsCombinationalComponent } from './courses/circuits-combinational/circuits-combinational.component';
import { CircuitsSequentialComponent } from './courses/circuits-sequential/circuits-sequential.component';
import { IntroductionToOopComponent } from './courses/introduction-to-oop/introduction-to-oop.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses/oop/:id', component: IntroductionToOopComponent },
  {
    path: 'courses/circuits-comb/:id',
    component: CircuitsCombinationalComponent,
  },
  { path: 'courses/circuits-seq/:id', component: CircuitsSequentialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
