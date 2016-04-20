import { Injectable } from 'angular2/core';
import { IDEA_BOARDS } from '../fixtures/mock-idea';

@Injectable()
export class IdeaBoardService{
    getBoard(id:number){
        return Promise.resolve(IDEA_BOARDS.find(x=>x.id === id));
    }
    getBoards(){
        return Promise.resolve(IDEA_BOARDS);
    }
}