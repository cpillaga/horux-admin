import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DetailEventComponent } from './pages/detailEvent/detailEvent.component';
// import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [

  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      { path: "product", component: ProductComponent },
      { path: "category", component: CategoriesComponent },
      { path: "detail/:id", component: DetailComponent },
      {
        path: '**',
        redirectTo: 'product'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
