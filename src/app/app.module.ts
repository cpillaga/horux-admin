import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { PublicModule } from "./public/public.module";

import { ComponentsModule } from './public/core/components/components.module';

import { ToastrModule } from 'ngx-toastr';

import { RecaptchaModule } from 'ng-recaptcha';
import { RECAPTCHA_LANGUAGE } from "ng-recaptcha";

import { environment } from '../environments/environment';
import { NgImageSliderModule } from 'ng-image-slider';

import firebase from 'firebase';
import { PixelModule } from 'ngx-pixel';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatIconModule } from "@angular/material/icon";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RecaptchaModule,
    ToastrModule.forRoot(), // ToastrModule added
    PixelModule.forRoot({ pixelId: '514283494025691' }), // FACEBOOK PIXEL
    // PixelModule.forRoot({ enabled: true, pixelId: '514283494025691' }),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgImageSliderModule,
    PublicModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatIconModule,
    ComponentsModule

  ],
  providers: [
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "es", // use Spanish language
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
