import { Injectable } from 'angular2/core';
import { IDEA_BOARDS } from '../fixtures/mock-idea';

@Injectable()
export class IdeaBoardService{
    getBoard(id:number){
        let board = IDEA_BOARDS.find(x=>x.id === id);
        return Promise.resolve(board);
    }
    getBoards(){
        return Promise.resolve(IDEA_BOARDS);
    }
}