import {
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  isThemeDark = true;

  @HostBinding('class')
  get themeMode() {
    const hostClass = this.isThemeDark ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', hostClass); // For elements that are not child of app-root
    return hostClass;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    let isThemeDark = localStorage.getItem('isThemeDark');
    if (isThemeDark) {
      this.isThemeDark = JSON.parse(isThemeDark);
    } else {
      this.isThemeDark = true;
    }
  }

  onThemeSwitched({ checked }: MatSlideToggleChange) {
    this.isThemeDark = !this.isThemeDark;
    localStorage.setItem('isThemeDark', JSON.stringify(this.isThemeDark));
  }
}
