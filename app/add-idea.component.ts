import { Component, OnInit } from 'angular2/core';
import { IdeaService } from './services/idea.service';
import { Idea } from './models/idea';

@Component({
    selector:'idea-form',
    templateUrl: 'app/add-idea.component.html',
    
})

export class IdeaFormComponent{
    idea:Idea = new Idea();
    errorMessage: string;
    boardId:string;
    
    constructor(private _ideaService:IdeaService){}
    
    addIdea(idea){
        this._ideaService.addIdea(this.boardId, idea)
    }
}