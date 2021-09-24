import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DetailsComponent } from './pages/details/details.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'HomeComponent' },
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   data: { animation: 'HomeComponent' },
  // },
  {
    path: 'details/:date',
    component: DetailsComponent,
    data: { animation: 'DetailsComponent' },
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
