// src/types/index.ts
// src/types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // This will now be the mobile app screenshot
  tech: string[];
  liveUrl: string | null;
  githubUrl: string;
  details: string;
  artifacts?: {
    [key: string]: string;
  };
  features: string[]; // <-- ADD THIS LINE
}