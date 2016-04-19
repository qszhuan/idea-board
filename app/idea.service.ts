import { Injectable } from 'angular2/core';
import { IDEAS } from './mock-idea';

@Injectable()
export class IdeaService{
    getIdeas(){
        return IDEAS;
    }
}