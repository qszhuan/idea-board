import { Component } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';
import {IdeaBoard} from "./models/idea-board";
import { guid } from './utils';
import { NgForm } from 'angular2/common';
@Component({
    selector: 'board-form',
    templateUrl:'app/add-board.component.html'
})

export class AddBoardComponent{
    
    constructor(private _boardService:IdeaBoardService){}
    board:IdeaBoard = new IdeaBoard();
    errorMessage: string;
    active=true;
    
    addBoard(board){
        this.active = false;
        this._boardService.addBoard(board);
        // this.board = new IdeaBoard(); //because ngForm bug
        this.active = true;
    }    
}