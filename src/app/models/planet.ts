import { Team } from "./team";

export interface Planet {
    id: number;
    name: string;
    description: string;
    status: string;
    teamId: number;
    teamDto: Team;
  }