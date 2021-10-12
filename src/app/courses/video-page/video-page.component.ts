import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { VideoPageService } from 'src/app/services/video-page.service';
import { VideoPage } from '../../services/VideoPage';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss'],
})
export class VideoPageComponent {
  $videoPage?: Observable<VideoPage>;

  constructor(
    private dom: DomSanitizer,
    private videoPageService: VideoPageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const videoPageId = val.url.split('/')[2];
        this.$videoPage = this.videoPageService.getVideoPage(videoPageId);
      }
    });
  }

  sanitizeUrl(url: string) {
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }

  previousPage(): void {
    this._changePage(-1);
  }

  nextPage(): void {
    this._changePage(1);
  }

  byPassHTML(myHtml: string) {
    return this.dom.bypassSecurityTrustHtml(myHtml);
  }

  private _changePage(pageShift: number): void {
    let routerParts = this.router.url.split('/');
    let index = Number(routerParts.pop()) + pageShift;
    let newRoute = routerParts.join('/') + '/' + index;
    this.router.navigate([newRoute]);
  }
}
