import { Component, OnInit } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';
import {IdeaBoard} from './models/idea-board';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-boards',
    directives:[],
    templateUrl: 'app/boards.component.html',
    styleUrls: ['app/boards.component.css']
})

export class BoardsComponent implements OnInit{
    boards:IdeaBoard[] = [];
    constructor(
        private _boardService:IdeaBoardService,
        private _router: Router
    ){}
    
    ngOnInit(){
        this._boardService.getBoards().then(boards => this.boards = boards);   
    }
    
    gotoBoard(board){
        this._router.navigate(["IdeaBoard", {id: board.id}]);
    }
}



