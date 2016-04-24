import { TeamMember } from './team-member';

export class Idea{
    id: number;
    name: string;
    description: string;
    likes: number = 0;
    members: TeamMember[] = [];
}
