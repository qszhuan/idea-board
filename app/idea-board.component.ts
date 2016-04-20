import { Component, OnInit } from 'angular2/core';
import { Idea } from './models/idea';
import { IdeaComponent } from './idea.component';
import { IdeaService } from './services/idea.service';

@Component({
    directives:[IdeaComponent],
    selector: "my-ideas",
    template: `
    <h2>Ideas</h2>
    <ul class="ideas">
        <li *ngFor="#idea of ideas" 
            (click)="onSelect(idea)"
            [class.selected]="idea === selectedIdea">
            <span class="badge">{{idea.id}}</span> {{idea.name}} 
        </li>
    </ul>
    <h1>{{title}}</h1> 
    <my-idea-detail [idea]="selectedIdea"></my-idea-detail>
    `,
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .ideas {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .ideas li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .ideas li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .ideas li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .ideas .text {
            position: relative;
            top: -3px;
        }
        .ideas .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `]
    
})

export class IdeaBoardComponent implements OnInit{
    title = "";
    selectedIdea:Idea;
    ideas :Idea[];
    
    constructor(private _ideaService:IdeaService){};
    ngOnInit(){
        this.getIdeas();    
    };
    getIdeas() {
        this._ideaService.getIdeas().then(ideas => this.ideas = ideas);
    }
    onSelect(idea:Idea){
        this.selectedIdea = idea;
    }
    
}
