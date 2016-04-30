import { Component, OnInit,Input, Output,EventEmitter, ElementRef } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';
import { Router } from 'angular2/router';
import { IdeaBoard } from './models/idea-board';
@Component({
    selector:"board-nav",
    templateUrl:'app/board-nav.component.html',
    styleUrls:['app/board-nav.component.css'],
    host: {
        '(document:click)': 'onClick($event)'
    }
})

export class BoardNavComponent implements OnInit{
    public boards: IdeaBoard[] = [];
    @Input()
    public isShown = false;
    private toggled:boolean;
   
    constructor(
        private _boardService: IdeaBoardService,
        private _router: Router,
        private _elementRef: ElementRef) {}
        
    ngOnInit(){
        this._boardService.boards$.subscribe(boards => this.boards = boards);
        this._boardService.getBoards();
    }
    gotoBoard(board){
        this.toggle();
        this._router.navigate(['IdeaBoard', {'id': board.id}])
    }
    toggle(){
        this.toggled = true;
        this.isShown = !this.isShown;
        
        return false;
    }
    
    onClick(event) {
        if(this.toggled){
            this.toggled = false;
            return true;
        }
        
        if(!this.isShown){
            console.log('board nav is hidden');
            return true;
        }
        var target = event.target;
        var inside = false;
        do {
            if (target === this._elementRef.nativeElement) {
                inside = true;
            }
            target = target.parentNode;
        } while (target);
        
        if(!inside){
            this.toggle();
        }
    }
}