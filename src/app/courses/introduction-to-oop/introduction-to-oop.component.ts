import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoPageService } from 'src/app/services/video-page.service';
import { VideoPage } from 'src/app/services/VideoPage';

@Component({
  selector: 'app-introduction-to-oop',
  templateUrl: './introduction-to-oop.component.html',
  styleUrls: ['./introduction-to-oop.component.scss'],
})
export class IntroductionToOopComponent {}
