import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainSearchComponent } from './main-search/main-search.component';
import { ResultsComponent } from './results/results.component';
import { SignupComponent } from './signup/signup.component';
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: 'main', component: MainSearchComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'edit', component: EditComponent},
  { path: 'remove', component: RemoveComponent},
  { path: 'support', component: SupportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
