import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VideoPageService } from '../services/video-page.service';
import { VideoPage } from '../services/VideoPage';

@Component({
  selector: 'app-my-markdown-editor',
  templateUrl: './my-markdown-editor.component.html',
  styleUrls: ['./my-markdown-editor.component.scss'],
})
export class MyMarkdownEditorComponent implements OnInit {
  myMarkdown = `## Title example
---

### Syntax highlight
\`\`\`c
char text[] = "hello world";
print("%s", text);
>> Hello world
\`\`\`

### Lists
1. Ordered list
2. Foo
   - Unordered list
   - Another unordered element

`;

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private videoPageService: VideoPageService
  ) {
    this.formGroup = this.fb.group({
      description: [''],
      markdownText: [''],
      videoUrl: [''],
    });
  }

  ngOnInit(): void {}

  createVideoPage() {
    this.videoPageService
      .createVideoPage(this.formGroup.value)
      .subscribe((response: any) => console.table(response));
  }

  submitForm() {
    const videoPage = this._processFormValues(this.formGroup.value);
    this.videoPageService
      .createVideoPage(videoPage)
      .subscribe((response: VideoPage) => console.table(response));
  }

  private _processFormValues(value: VideoPage): VideoPage {
    value.markdownText = this.myMarkdown;
    return value;
  }
}
