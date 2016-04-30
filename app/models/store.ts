import { Injectable } from 'angular2/core';
import { IdeaBoard } from './idea-board';
import {Observable, Observer}     from 'rxjs/Rx';


export class Store{
    boards:IdeaBoard[];
    selectedBoard:IdeaBoard;
}

@Injectable()
export class AppStore{
    private store:Observable<Store>;
    private observer:Observer<Store>;
    
    constructor(){
        this.store = new Observable(observer => this.observer = observer).share();
    }
    getState(){
        return this.store;
    }
    next(data){
        this.observer.next(data);
    }
}
