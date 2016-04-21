import { Component } from 'angular2/core';
import { IdeaBoardComponent } from './idea-board.component';
import { BoardsComponent } from './boards.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { IdeaService } from './services/idea.service';
import { IdeaBoardService } from './services/idea-board.service';
import { BoardNavComponent } from './board-nav.component';

@Component({
    selector: "my-app",
    templateUrl:'app/app.component.html',
    styleUrls:["app/app.component.css"],
    directives:[ROUTER_DIRECTIVES, BoardNavComponent],
    providers:[ROUTER_PROVIDERS, IdeaService, IdeaBoardService ]
    
})


@RouteConfig([
    {
        path: '/board/:id',
        name: 'IdeaBoard',
        component: IdeaBoardComponent
    },
    {
        path: '/boards',
        name: 'Boards',
        component: BoardsComponent,
    },
    {
        path: '/',
        name: 'Home',
        component: BoardsComponent,
        useAsDefault:true
    }
])

export class AppComponent{
    public title:string="Idea Board";
    public showBoardNav:boolean=false;

    toggleBoardNavList(){
        this.showBoardNav = !this.showBoardNav;
        console.log(this.showBoardNav)
    }
}