import { Component } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';
import {IdeaBoard} from "./models/idea-board";
import { guid } from './utils';
@Component({
    selector: 'add-board',
    template: `
    
    <div>Add Board:</div>
    <div>Title:</div>
    <input [(ngModel)] = "board.title" />
    <div>Description:</div>
    <input [(ngModel)] = "board.description" />
    <button (click)="addBoard(board)">Add</button>
    `,
})

export class AddBoardComponent{
    
    constructor(private _boardService:IdeaBoardService){}
    board:IdeaBoard = new IdeaBoard();
    addBoard(board){
        this._boardService.addBoard(board);
        this.board = new IdeaBoard();
    }    
}