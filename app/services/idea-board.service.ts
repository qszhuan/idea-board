import { Injectable } from 'angular2/core';
import { IDEA_BOARDS } from '../fixtures/mock-idea';
import { Response, Http } from 'angular2/http';
import { IdeaBoard } from "../models/idea-board";
import {Observable}     from 'rxjs/Rx';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class IdeaBoardService{
    constructor(private http:Http){
        
    }
    private _boardsUrl = "app/boards";
    
    getBoard(id:string){
        let board = IDEA_BOARDS.find(x=>x.id === id);
        return Observable.fromPromise(Promise.resolve(board));
    }
    getBoards(): Observable<IdeaBoard[]>{
        return this.http.get(this._boardsUrl)
        // .delay(1000)
        .do(x=>console.log('get boards request.'))
        .map(this.extractData).catch(this.handleError);
        // return Observable.fromPromise(Promise.resolve(IDEA_BOARDS)).catch(this.handleError);
    }
    addBoard(board){
        // IDEA_BOARDS.push(board);
        let body = JSON.stringify( board );
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._boardsUrl, body, options)
             .map(this.extractData)
             .catch(this.handleError);
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