import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoPageService } from 'src/app/services/video-page.service';
import { VideoPage } from '../../services/VideoPage';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss'],
})
export class VideoPageComponent implements OnInit {
  @Input() videosFamily?: string;
  @Input() mainTitle?: string;
  videoPages?: VideoPage[];
  currentPage?: number;

  constructor(
    private dom: DomSanitizer,
    private videoPageService: VideoPageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.currentPage = params.id;
    });
  }
  ngOnInit(): void {
    if (this.videosFamily)
      this.videoPageService
        .getVideosByFamily(this.videosFamily)
        .subscribe((response) => {
          this.videoPages = response;
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

  private _changePage(pageShift: number): void {
    let routerParts = this.router.url.split('/');
    let index = Number(routerParts.pop()) + pageShift;
    let newRoute = routerParts.join('/') + '/' + index;
    this.router.navigate([newRoute]);
  }
}
