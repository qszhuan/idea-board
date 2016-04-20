import { Injectable } from 'angular2/core';
import { IDEAS, IDEA_BOARDS } from '../fixtures/mock-idea';
import { Idea } from '../models/idea';

@Injectable()
export class IdeaService{
    getIdeas(){
        return Promise.resolve(IDEAS);
    }
    getIdeasSlowly(){
        return new Promise<Idea[]>(resolve=>setTimeout(()=>resolve(IDEAS), 2000))
    }
}
