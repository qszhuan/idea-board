import { Component } from 'angular2/core';
import { IdeaBoardComponent } from './idea-board.component';
import { BoardsComponent } from './boards.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { IdeaService } from './services/idea.service';
import { IdeaBoardService } from './services/idea-board.service';

@Component({
    selector: "my-app",
    template:`
    <h1>{{title}}</h1>
    <a [routerLink]="['Ideas']">Ideas</a>
    <a [routerLink]="['Boards']">Boards</a>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS,IdeaService, IdeaBoardService ]
    
})


@RouteConfig([
    {
        path: '/ideas',
        name: 'Ideas',
        component: IdeaBoardComponent
    },
    {
        path: '/boards',
        name: 'Boards',
        component: BoardsComponent
    }
])

export class AppComponent{
    title="Board"
}