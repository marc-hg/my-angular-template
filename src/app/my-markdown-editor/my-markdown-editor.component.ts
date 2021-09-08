import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
