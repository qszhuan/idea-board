import { Injectable } from 'angular2/core';
import { IdeaBoard } from './idea-board';
import {Observable, Observer, BehaviorSubject}     from 'rxjs/Rx';


export class Store{
    boards:IdeaBoard[];
    selectedBoard:IdeaBoard;
}

@Injectable()
export class AppStore{
    private _store:BehaviorSubject<Store> = new BehaviorSubject(new Store());
    private store:Observable<Store> = this._store.asObservable().share();
    
    constructor(){
    }
    getState(){
        return this.store;
    }
    getValue(){
        return this._store.getValue();
    }
    next(data){
        this._store.next(data);
    }
}
