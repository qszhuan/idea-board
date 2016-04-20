import { Component, Input } from 'angular2/core';
import { Idea } from './models/idea';

@Component({
    selector: 'my-idea-detail',
    template:`
    <div *ngIf="idea">
        <div>
            <div>Title:</div>
            {{idea.name}}
        </div>
        <div>
            <div>Description:</div>
            {{idea.description}}
            <div>
                <textarea rows=5 cols="20" [(ngModel)]="idea.description"></textarea>
            </div>
        </div>
    </div>
    `
})

export class IdeaComponent{
    @Input()
    idea: Idea;
}
