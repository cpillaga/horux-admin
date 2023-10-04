import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ComponentsModule } from '../public/core/components/components.module';

import { CarouselItemsModule } from '@mugan86/ng-shop-ui';
import { ComponentsAdminModule } from './core/components/components-admin.module';
import { DragScrollModule } from 'ngx-drag-scroll';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MaterialModule } from '../material/material.module';
import { NgImageSliderModule } from 'ng-image-slider';

import localeEsEc from '@angular/common/locales/es-EC';
import { Event } from 'typescript.events';
import { ProductComponent } from './pages/product/product.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { DetailComponent } from './pages/detail/detail.component';

registerLocaleData(localeEsEc, 'es-EC');


@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    CategoriesComponent,
    AddCategoryComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgImageSliderModule,
    MaterialModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    AdminRoutingModule,
    ComponentsModule,
    ComponentsAdminModule,
    CarouselItemsModule,
    DragScrollModule,
    NgxDropzoneModule
  ],
  exports: [
    AddProductComponent,
    AddCategoryComponent
  ],
  providers: [
    Event,
    { provide: LOCALE_ID, useValue: 'es-EC' },
  ]
})
export class AdminModule { }
