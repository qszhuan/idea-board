import { Injectable } from 'angular2/core';
import { IDEA_BOARDS } from '../fixtures/mock-idea';
import { Response, Http } from 'angular2/http';
import { IdeaBoard } from "../models/idea-board";
import { Store, AppStore } from '../models/store';
import {Observable, Observer}     from 'rxjs/Rx';
import {Headers, RequestOptions} from 'angular2/http';



@Injectable()
export class IdeaBoardService{
    private _boardsUrl = "app/boards";
    private state:Store = new Store();
    
    constructor(private http:Http, private appStore:AppStore){
        this.appStore.getState().subscribe(state=>this.state = state);
    }
    
    getBoard(id:string){
        this.http.get(this._boardsUrl)
        .do(x=>console.log('get boards request.'))
        .map(this.extractData).catch(this.handleError)
        .subscribe(boards=>{
            let board = boards.find(x=>x.id === id);
            if(board != undefined){
                this.state.selectedBoard = board;
                this.appStore.next(this.state);
                
            }
        });
        
    }
    getBoards() {
        this.http.get(this._boardsUrl)
        // .delay(1000)
        .do(x=>console.log('get boards request.'))
        .map(this.extractData).catch(this.handleError)
        .subscribe(boards=>{
            this.state.boards = boards;
            this.appStore.next(this.state);
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
                     this.state.boards.push(board);
                     this.appStore.next(this.state);
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