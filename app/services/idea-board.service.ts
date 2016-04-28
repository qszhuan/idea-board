import { Injectable } from 'angular2/core';
import { IDEA_BOARDS } from '../fixtures/mock-idea';
import { Response, Http } from 'angular2/http';
import { IdeaBoard } from "../models/idea-board";
import {Observable}     from 'rxjs/Rx';

@Injectable()
export class IdeaBoardService{
    constructor(private http:Http){
        
    }
    private _boardsUrl = "app/fixtures/boards.json";
    
    getBoard(id:number){
        let board = IDEA_BOARDS.find(x=>x.id === id);
        return Observable.fromPromise(Promise.resolve(board));
    }
    getBoards(): Observable<IdeaBoard[]>{
        return Observable.fromPromise(Promise.resolve(IDEA_BOARDS));
    }
    addBoard(board){
        IDEA_BOARDS.push(board);
    }
}