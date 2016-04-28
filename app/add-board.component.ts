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
    
    addBoard(board){
        this._boardService.addBoard(board);
        // .subscribe(
        //              error =>  {
        //                  this.errorMessage = <any>error;
        //                 });
        // this.board = new IdeaBoard(); //because ngForm bug
    }    
}