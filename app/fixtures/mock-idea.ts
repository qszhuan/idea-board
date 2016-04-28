import { Idea } from '../models/idea';
import {IdeaBoard} from '../models/idea-board';
import {guid} from "../utils";

export var IDEAS: Idea[] = [
    {id:guid(), name: "WhoTo?", description:`
    Create an easily searchable staff directory that lists people by wider areas of expertise rather than job description (as our job descriptions are usually nothing like what we end up doing). Eliminates the question of ‘who should I go to about this?’ – for example a search result for me would include modelcarsales...`},
    {id:guid(), name: "Easy Hours", description:"Remove the pain of the labour cap and realize massive dollar increase in the R&D Tax Claim."},
    {id:guid(), name: "Easy Hours", description:"Remove the pain of the labour cap and realize massive dollar increase in the R&D Tax Claim."},
    {id:guid(), name: "Easy Hours", description:"Remove the pain of the labour cap and realize massive dollar increase in the R&D Tax Claim."},
    {id:guid(), name: "Easy Hours", description:"Remove the pain of the labour cap and realize massive dollar increase in the R&D Tax Claim."},
    {id:guid(), name: "Easy Hours", description:"Remove the pain of the labour cap and realize massive dollar increase in the R&D Tax Claim."},
    {id:guid(), name: "Sell it now!", description:"To open up our dealer subscription services to allow for alternative single transactions for smaller dealers."},
    {id:guid(), name: "Q!", description:`
    An automated booking system for the:
    * Table tennis table
    * Pool table
    * Showers
    * Available carparks (2-5 spots dedicated to the Carsales foundation where it would cost a gold coin donation to book.)"`},
    
];

export var IDEA_BOARDS: IdeaBoard[] = [
    {
        id:guid(), 
        title: "Hackthon-2016", 
        description: "Grab ‘n Go Lunch available. We’re providing meals from the Lunch Guys in the kitchen space on the Orange floor – they’ll be here for an hour, from 11am, so grab your food and then eat it when you’re ready!", 
        ideas: IDEAS
    },
    {id:guid(), title: "Hackthon-2015", description: "This is the description of 2015 hackthon.", ideas: IDEAS},
    {id:guid(), title: "Hackthon-2016", description: "This is the description", ideas: IDEAS},
    {id:guid(), title: "Hackthon-2016", description: "This is the description", ideas: IDEAS},
    {id:guid(), title: "Hackthon-2016", description: "This is the description", ideas: IDEAS},
];

export class BoardData {
  createDb() {
    let boards = IDEA_BOARDS;
    return {boards};
  }
}