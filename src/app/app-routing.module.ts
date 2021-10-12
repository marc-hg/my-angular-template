import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';
import { VideoPageComponent } from './courses/video-page/video-page.component';
import { HomeComponent } from './home/home.component';
import { MyMarkdownEditorComponent } from './my-markdown-editor/my-markdown-editor.component';

export function coursesPathMatcher(url: UrlSegment[]) {
  return url[0].path === 'courses' ? { consumed: url } : null;
}

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'mymarkdowneditor',
    pathMatch: 'full',
    component: MyMarkdownEditorComponent,
  },
  { matcher: coursesPathMatcher, component: VideoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
