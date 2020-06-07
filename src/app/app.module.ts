import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { StarRatingModule } from './star-rating/star-rating.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core-module.module';
import { EncrDecrService } from './core/services/encrdecr.service';
import { TermsComponent } from './terms/terms.component';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './core/services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatSelectModule,
    StarRatingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [EncrDecrService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {
}
