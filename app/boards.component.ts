import { Component, OnInit } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';
import {IdeaBoard} from './models/idea-board';

@Component({
    selector: 'my-boards',
    directives:[],
    templateUrl: 'app/boards.component.html'
})

export class BoardsComponent implements OnInit{
    boards:IdeaBoard[] = [];
    constructor(private _boardService:IdeaBoardService){}
    ngOnInit(){
        this._boardService.getBoards().then(boards => this.boards = boards);   
    }
    gotoBoard(board){
        console.log('goto board: ', board.id)
    }
}



