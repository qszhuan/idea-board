import { Injectable } from 'angular2/core';
import { IDEA_BOARDS } from '../fixtures/mock-idea';
import { Response, Http } from 'angular2/http';
import { IdeaBoard } from "../models/idea-board";
import {Observable, Observer}     from 'rxjs/Rx';
import {Headers, RequestOptions} from 'angular2/http';


@Injectable()
export class IdeaBoardService{
    boards$:Observable<IdeaBoard[]>;
    board$:Observable<IdeaBoard>;
    private boardsObserver:Observer<IdeaBoard[]>;
    private boardObserver:Observer<IdeaBoard[]>;
    private _dataStore = {
        boards: []
    };
    private _boardsUrl = "app/boards";
    
    constructor(private http:Http){
        this.boards$ = new Observable(observer =>  this.boardsObserver = observer).share();
        this.board$ = new Observable(observer =>  this.boardObserver = observer).share();
    }
    
    getBoard(id:string){
        this.http.get(this._boardsUrl)
        .do(x=>console.log('get boards request.'))
        .map(this.extractData).catch(this.handleError)
        .subscribe(boards=>{
            let board = boards.find(x=>x.id === id);
            if(board != undefined){
                this.boardObserver.next(board);
            }
        });
        
    }
    getBoards() {
        this.http.get(this._boardsUrl)
        // .delay(1000)
        .do(x=>console.log('get boards request.'))
        .map(this.extractData).catch(this.handleError)
        .subscribe(boards=>{
            this._dataStore.boards = boards;
            this.boardsObserver.next(this._dataStore.boards);
        });
    }
    addBoard(board){
        // IDEA_BOARDS.push(board);
        let body = JSON.stringify( board );
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._boardsUrl, body, options)
             .map(this.extractData)
             .catch(this.handleError)
             .subscribe(board =>{
                 if(board.id){
                     this._dataStore.boards.push(board);
                     this.boardsObserver.next(this._dataStore.boards);
                 }
             });
    }
    
    private extractData(res: Response) {
        console.log("get response:", res);
        if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body && body.data || { };
    }
    
    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}