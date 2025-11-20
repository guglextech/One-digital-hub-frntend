import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { ToastrModule } from "ngx-toastr";
import { RouterModule } from "@angular/router";
import { AuthInterceptor } from "./core/interceptors/auth.interceptor";
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS,
    },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
