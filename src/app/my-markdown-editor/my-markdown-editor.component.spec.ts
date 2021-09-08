import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMarkdownEditorComponent } from './my-markdown-editor.component';

describe('MyMarkdownEditorComponent', () => {
  let component: MyMarkdownEditorComponent;
  let fixture: ComponentFixture<MyMarkdownEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMarkdownEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMarkdownEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
