import { challengesList } from "../utils/challenge-registry";

export interface Challenge {
  title: string;
  description: string;
  path: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const challengesData: Challenge[] = challengesList;
