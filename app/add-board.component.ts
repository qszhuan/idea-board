import { Component } from 'angular2/core';
import { IdeaBoardService } from './services/idea-board.service';

@Component({
    selector: 'add-board',
    template: `
    
    <div>Add Board:</div>
    <input [(ngModel)] = "name" />
    
    `,
})

export class AddBoardComponent{
    
}