import { Idea } from './idea';
import { guid } from '../utils';
export class IdeaBoard{
    id: string = guid();
    title: string;
    description: string;
    ideas: Idea[] = [];
    
}

