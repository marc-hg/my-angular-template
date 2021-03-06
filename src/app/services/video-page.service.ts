import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { VideoPage } from './VideoPage';

@Injectable({
  providedIn: 'root',
})
export class VideoPageService {
  // TODO: Put this in a DB someday
  videoPages: VideoPage[] = [
    {
      title: 'Introduction to OOP',
      markdownText: `In these series I'll try my best to explain what OOP is and its four fundamental principles. This is the first video.
            OOP is one of the most popular programming paradigms nowadays specially in the business world due to its facility to model real life objects in code(so it's easier to solve real life problems), reusability, modularity, security amongst other benefits`,
      videoUrl: `https://www.youtube.com/embed/1Tb6VxSU9d8`,
      family: 'oop',
    },
    {
      title: 'What is a program? States and Behaviour',
      markdownText: `In this part we're gonna explain the concepts of States and Behaviour in a program. In summary the states in a program are the set of possible data combinations it can hold and the behaviour is the logic part of the program responsible for altering the current state(through modifying or creating new data)`,
      videoUrl: `https://www.youtube.com/embed/kDKZi23fqsQ`,
      family: 'oop',
    },
    {
      title: 'What is OOP?',
      markdownText: `In this part we're gonna take a quick overview at Procedural and Functional programming and also introduce the concept of Object Oriented Programming.

Summary:
Procedural: It's as straightforward as it gets. Order of code is important. If it gets too complex you can split parts of code in modules/functions

Functional: Behaviour gets separated from the State of the program. It's stateless. The behaviour/logic part of the program gets coded into pure functions. Pure functions dont modify previous data

OOP: Behaviour and state that's related gets encapsulated into objects. Everything is an object.
`,
      videoUrl: `https://www.youtube.com/embed/z7g9Niu3h9Q`,
      family: 'oop',
    },
    {
      title: 'Encapsulation',
      markdownText: `In this part we're gonna cover the first principle of OOP: Encapsulation

Summary:
Encapsulation is bundling together(encapsulating) data and behaviour that is somehow related(in this case, related to dog). Also when you encapsulate data and behaviour you should only expose what you need to expose`,
      videoUrl: `https://www.youtube.com/embed/u19vaw8mFqM`,
      family: 'oop',
    },
    {
      title: 'Abstraction',
      markdownText: `In this part we're gonna cover the second principle of OOP: Abstraction

Summary:
As we saw on the last video, when encapsulating Data and Behaviour in an object we should also just expose only what's necessary, and that's the main idea of abstraction. In this video we'll also look at different ways of restricting what we expose to different scopes by using the different access modifiers: private, no modifier, protected and public`,
      videoUrl: `https://www.youtube.com/embed/RyWAS3YX8Iw`,
      family: 'oop',
    },
    {
      title: 'Inheritance',
      markdownText: `In this part we're gonna cover the third, and probably most complex, principle of OOP: Inheritance

Summary:
Inheritance is the way OOP brings us to reutilize code through passing down data and behaviour from one main common class to subclasses while also giving us the flexibility to not only have new different data/behaviour on these subclasses than the parent but also overwrite behaviour if we wanted to`,
      videoUrl: `https://www.youtube.com/embed/LukOo5NpbkU`,
      family: 'oop',
    },
    {
      title: 'Polymorphism',
      markdownText: `In this part we're gonna cover the fourth and last principle of OOP: Polymorphism

Summary:
Polymorphism is the way in which one thing can be many others. In the context of OOP this means that one particular behaviour with one particular name can actually be different things depending on the context.

We have two types of polymorphism: The one that occurs at compilation time through method overloading and the one that occurs at runtime when using inheritance(or interfaces)`,
      videoUrl: `https://www.youtube.com/embed/C7FLK2vGEmE`,
      family: 'oop',
    },
    {
      title: 'Logisim - How to set up a simple subcircuit',
      markdownText: `Useful for reusability and keeping bigger circuits simple.

The example is a bit silly since it's just one XOR gate but all that you'll see in the end is inputs and outputs so it doesn't really matter how complex or simple the subcircuit is`,
      videoUrl: `https://www.youtube.com/embed/ggc0xGjmtKw`,
      family: 'CC',
    },
    {
      title: '',
      markdownText: ``,
      videoUrl: ``,
      family: 'foo',
    },
    {
      title: 'Numerical systems - Positional Numerical systems',
      markdownText: `    <p>In this section we're gonna learn about numerical systems. In particular binary since that's the one computers
        work with
        Besides this introduction this course is gonna consist of two main parts, and each one of several subparts
    </p>

    <h3>Index</h3>
    <ol>
        <li>Numerical systems</li>
        <ol>
            <li>Positional Numerical systems</li>
            <li>Change of base</li>
            <li>Basic arithmetic operations</li>
        </ol>
        <br>
        <li>Representation of numbers in a computer</li>
        <ol>
            <li>Range, precision, error and overflow</li>
            <li>Natural and whole numbers</li>
            <li>More on whole numbers. 2's complements</li>
            <li>Basic arithmetic operations on 2's complements</li>
            <li>Fractional numbers. Float representation</li>
        </ol>
    </ol>
    <br>
    <p>First we're gonna look at Numerical systems. How we can represent numbers in different ways and operate with
        them.</p>
    <p>Afterwards, we're gonna look more into detail at a particular numerical system: Binary and how
        computers make use of it to represent data</p>`,
      videoUrl: ``,
      family: 'electronics',
    },
    {
      title: 'Positional Numerical systems',
      markdownText: `    <h3>What is a Numerical System?</h3>
    <p>Simply a way of representing a set of numerical values</p>

    <fieldset>
        <legend>Example</legend>
        <p>The numerical system one we all learn since little is called <i>decimal</i>. We know that <b>1</b> means one,
            <b>3</b>
            means three but that's only because we decided it that way. Instead we could have said that <b>A</b> means
            one,
            <b>B</b> two and so on
        </p>
    </fieldset>`,
      videoUrl: ``,
      family: 'electronics',
    },
  ];

  url = environment.backendUrl + 'videoPages';

  constructor(private http: HttpClient) {}

  getVideosByFamily(family: string): Observable<VideoPage[]> {
    return of(this.videoPages.filter((video) => video.family === family));
  }

  getVideoPage(id: string): Observable<VideoPage> {
    if (!id)
      throw new Error('No id was given to VideoPageService.getVideoPage()');
    return this.http
      .get(`${this.url}/${id}`)
      .pipe(map((response) => response as VideoPage));
  }

  createVideoPage(videoPage: VideoPage): Observable<VideoPage> {
    return this.http
      .post(this.url, videoPage)
      .pipe(map((response) => response as VideoPage));
  }
}
