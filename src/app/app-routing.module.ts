import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { CourseComponent } from './courses/course/course.component';
import { HomeComponent } from './home/home.component';

export function coursesPathMatcher(url: UrlSegment[]) {
  return url[0].path === 'courses' ? { consumed: url } : null;
}

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { matcher: coursesPathMatcher, component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
