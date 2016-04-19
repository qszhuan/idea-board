import { Component } from 'angular2/core';
import { IdeasComponent } from './ideas.component';
@Component({
    selector: "my-app",
    template:`
    <h1>{{title}}</h1>
    <my-ideas></my-ideas>
    `,
    directives:[IdeasComponent],
    
})

export class AppComponent{
    title="Idea Board"
}