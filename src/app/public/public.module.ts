import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
// import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";

import { NgImageSliderModule } from 'ng-image-slider';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from "../material/material.module";
// import { CreateAccountComponent } from './modals/createAccount/createAccount.component';
// import { ForgotPasswordComponent } from './modals/forgotPassword/forgotPassword.component';
import { NotFoundComponent } from "./pages/not-found/not-found.component";

// import { CarouselItemsModule } from '@mugan86/ng-shop-ui';
import { ComponentsModule } from "./core/components/components.module";
import { FooterComponent } from "./core/components/footer/footer.component";
import { NavbarComponent } from "./core/components/navbar/navbar.component";


import localeEsEc from '@angular/common/locales/es-EC';
import { Event } from 'typescript.events';
registerLocaleData(localeEsEc, 'es-EC');
// CarouselItemsModule,
import { CarouselModule } from 'ngx-owl-carousel-o';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { AddCustomerComponent } from "./modals/add-customer/add-customer.component";
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    // CarouselModule.forRoot(),
    ModalModule.forRoot(),

    NgImageSliderModule,
    ReactiveFormsModule,
    MaterialModule,
    // CarouselItemsModule,

    ComponentsModule,
    RouterModule,

    CarouselModule,

    // Specify your library as an import
    SlickCarouselModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoginComponent,
    NotFoundComponent,

    //? MODALS
    // CreateAccountComponent,
    // ForgotPasswordComponent,
    // AddCustomerComponent
  ],
  exports: [
    LoginComponent,
    NotFoundComponent,

    FooterComponent,
    NavbarComponent,

  ],
  providers: [
    Event,
    { provide: LOCALE_ID, useValue: 'es-EC' },
  ]
})
export class PublicModule { }
