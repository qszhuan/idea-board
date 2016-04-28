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
    active=true;
    
    addBoard(board){
        this._boardService.addBoard(board);
        this.active = false;
        
        this.board = new IdeaBoard();
        this.active = true;
    }    
}