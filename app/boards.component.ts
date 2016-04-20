import { Component, OnInit } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';
import {IdeaBoard} from './models/idea-board';

@Component({
    selector: 'my-boards',
    directives:[],
    template: `
    <div>This is the boards page. </div>
    <ul class="ideas">
        <li *ngFor="#board of boards">
            <div>{{board.id}}</div>
            <div>{{board.title}}</div>
        </li>
    </ul>
    `,
})

export class BoardsComponent implements OnInit{
    boards:IdeaBoard[];
    constructor(private _boardService:IdeaBoardService){}
    ngOnInit(){
        this._boardService.getBoards().then(boards => this.boards = boards);   
    }
}



