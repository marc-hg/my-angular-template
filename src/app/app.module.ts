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
import { HomeComponent } from './home/home.component';
import { VideoPageComponent } from './courses/video-page/video-page.component';
import { CourseComponent } from './courses/course/course.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMarkdownEditorComponent } from './my-markdown-editor/my-markdown-editor.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CapitalPipe } from './pipes/capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    VideoPageComponent,
    CourseComponent,
    MyMarkdownEditorComponent,
    CapitalPipe,
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
    ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    FormsModule,
    MatGridListModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
