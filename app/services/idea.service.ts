import { Injectable } from 'angular2/core';
import { IDEAS, IDEA_BOARDS } from '../fixtures/mock-idea';
import { Idea } from '../models/idea';
import { Store, AppStore } from '../models/store';
import { Response, Http } from 'angular2/http';
import {Observable, Observer}     from 'rxjs/Rx';
import {Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class IdeaService{
    private _boardsUrl = "app/boards";
    private state:Store;
    
    constructor(private http:Http, private appStore:AppStore){
        this.appStore.getState().subscribe(store=>this.state = store);
    }
    getIdeas(){
        return Promise.resolve(IDEAS);
    }
    getIdeasSlowly(){
        return new Promise<Idea[]>(resolve=>setTimeout(()=>resolve(IDEAS), 2000))
    }
    addIdea(boardId:string, idea:Idea){
        this.http.get(this._boardsUrl)
        .do(x=>console.log('get boards request.'))
        .map(this.extractData).catch(this.handleError)
        .subscribe(boards=>{
            let board = boards.find(x=>x.id === boardId);
            if(board != undefined){
                this.state.selectedBoard = board;
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
