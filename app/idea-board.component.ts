import { Component, OnInit } from 'angular2/core';
import { Idea } from './models/idea';
import { IdeaBoard } from './models/idea-board';
import { IdeaComponent } from './idea.component';
import { IdeaService } from './services/idea.service';
import { IdeaBoardService } from './services/idea-board.service';
import { RouteParams } from 'angular2/router';

@Component({
    directives:[IdeaComponent],
    selector: "my-ideas",
    templateUrl: 'app/idea-board.component.html',
    styleUrls: ['app/idea-board.component.css']
    
})

export class IdeaBoardComponent implements OnInit{
    title = "";
    selectedIdea: Idea;
    public board : IdeaBoard;
    
    constructor(private _ideaBoardService:IdeaBoardService,
                private _routeParams: RouteParams){};
    ngOnInit(){
        let id = this._routeParams.get("id");
        this.getBoard(id);    
    };
    getBoard(id) {
        this._ideaBoardService.getBoard(id).subscribe(board => this.board = board);
    }
    onSelect(idea:Idea){
        this.selectedIdea = idea;
    }
    
}
