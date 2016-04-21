import { Component, OnInit,Input, Output,EventEmitter } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';
import { Router } from 'angular2/router';
import { IdeaBoard } from './models/idea-board';
@Component({
    selector:"board-nav",
    templateUrl:'app/board-nav.component.html',
    styleUrls:['app/board-nav.component.css'],
    host: {
    '(click)': 'onClick($event.target)'
  }
})

export class BoardNavComponent implements OnInit{
    public boards: IdeaBoard[] = [];
    @Input()
    public isShown = false;
    @Output()
    onToggle = new EventEmitter();
    
    constructor(
        private _boardService: IdeaBoardService,
        private _router: Router) {}
        
    ngOnInit(){
        this._boardService.getBoards().then(boards => this.boards = boards)
    }
    gotoBoard(board){
        this.toggle();
        this._router.navigate(['IdeaBoard', {'id': board.id}])
    }
    toggle(){
        
        this.isShown = !this.isShown;
        // this.onToggle.emit(this.isShown);
    }
    onClick(btn) {
        console.log("button", btn);
    }
}