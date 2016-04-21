import { Component, OnInit } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';
import { Router } from 'angular2/router';
import { IdeaBoard } from './models/idea-board';
@Component({
    selector:"board-nav",
    templateUrl:'app/board-nav.component.html',
    styleUrls:['app/board-nav.component.css']
})

export class BoardNavComponent implements OnInit{
    public boards: IdeaBoard[] = [];
    constructor(
        private _boardService: IdeaBoardService,
        private _router: Router) {}
        
    ngOnInit(){
        this._boardService.getBoards().then(boards => this.boards = boards)
    }
    gotoBoard(board){
        this._router.navigate(['IdeaBoard', {'id': board.id}])
    }
}