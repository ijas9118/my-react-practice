import { type ComponentType, type LazyExoticComponent, lazy } from "react";

export interface ChallengeInfo {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  problemLink?: string;
  // We can infer githubLink from the file structure, or add it here if it varies
}

export interface ChallengeData extends ChallengeInfo {
  id: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>>;
  markdown?: string;
}

// eager: true for info to build the list synchronously
const infoModules = import.meta.glob('../challenges/*/info.ts', { eager: true, import: 'info' });

// lazy components
const componentModules = import.meta.glob('../challenges/*/index.tsx');

// eager: true for markdown. If these get huge, we might want to make them lazy too, 
// but for text descriptions it's usually fine.
const markdownModules = import.meta.glob('../challenges/*/README.md', { query: '?raw', import: 'default', eager: true });

export const challengesMap: Record<string, ChallengeData> = {};

for (const path in infoModules) {
  // path is like "../challenges/counter/info.ts"
  const parts = path.split('/');
  const id = parts[parts.length - 2]; // "counter"
  
  const info = infoModules[path] as ChallengeInfo;
  
  // Find component
  const componentPath = `../challenges/${id}/index.tsx`;
  const componentImporter = componentModules[componentPath] as () => Promise<{ default: ComponentType<any> }>;
  
  // Find markdown
  const markdownPath = `../challenges/${id}/README.md`;
  const markdown = markdownModules[markdownPath] as string;

  if (componentImporter) {
    challengesMap[id] = {
      ...info,
      id,
      path: `/challenges/${id}`,
      Component: lazy(componentImporter),
      markdown: markdown || "No description provided."
    };
  }
}

export const challengesList = Object.values(challengesMap);
