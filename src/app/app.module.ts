import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { IntroductionToOopComponent } from './courses/introduction-to-oop/introduction-to-oop.component';
import { HomeComponent } from './home/home.component';
import { CircuitsCombinationalComponent } from './courses/circuits-combinational/circuits-combinational.component';
import { CircuitsSequentialComponent } from './courses/circuits-sequential/circuits-sequential.component';
import { VideoPageComponent } from './shared/video-page/video-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IntroductionToOopComponent,
    HomeComponent,
    CircuitsCombinationalComponent,
    CircuitsSequentialComponent,
    VideoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}