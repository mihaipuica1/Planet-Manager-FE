import { Captain } from "./captain";
import { Robot } from "./robot";

export interface Team {
    id: number;
    name: string;
    captainId: number;
    captain: Captain;
    robots: Robot[];
  }