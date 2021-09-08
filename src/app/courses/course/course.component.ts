import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  videoFamily = 'OOP';
  mainTitle = 'mainTitle';

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = (val as NavigationEnd).url;
        this.videoFamily = url.split('/')[2];
      }
    });
  }
}
