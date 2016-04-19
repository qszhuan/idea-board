import { Component } from 'angular2/core';
import { IdeasComponent } from './ideas.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: "my-app",
    template:`
    <h1>{{title}}</h1>
    <a [routerLink]="['Ideas']">Ideas</a>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]
    
})


@RouteConfig([
    {
        path: '/ideas',
        name: 'Ideas',
        component: IdeasComponent
    }
])
export class AppComponent{
    title="Idea Board"
}