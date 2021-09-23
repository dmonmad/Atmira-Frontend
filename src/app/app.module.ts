import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SafePipe } from './pipes/safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DetailsComponent } from './pages/details/details.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faChevronCircleLeft, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { AngularTiltModule } from 'angular-tilt';
import { HoverClassDirective } from './directives/hover-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe,
    SpinnerComponent,
    DetailsComponent,
    HoverClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularTiltModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library : FaIconLibrary) {
    library.addIcons(faWindowClose)
  }
 }
