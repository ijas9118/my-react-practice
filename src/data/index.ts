export interface Challenge {
  title: string;
  description: string;
  path: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const challengesData: Challenge[] = [
  {
    title: "Countdown Timer",
    description: "Build a countdown timer with customizable hours, minutes, and seconds.",
    path: "/challenges/countdown-timer",
    difficulty: "Easy",
  },
  {
    title: "Counter Using React",
    description: "Create a React counter with increment, decrement, and reset functionalities.",
    path: "/challenges/counter",
    difficulty: "Easy",
  },
  {
    title: "Even Or Odd",
    description: "Build a component to check if given number is even or odd.",
    path: "/challenges/even-or-odd",
    difficulty: "Easy",
  },
  {
    title: "Chips Input",
    description:
      "Create a component that allows users to input a tag(chip) and display them with dynamic deletion.",
    path: "/challenges/chips-input",
    difficulty: "Easy",
  },
  {
    title: "Asterisk Field Validation",
    description:
      "Create a React component that allows users to input and validate required fields.",
    path: "/challenges/asterisk-field-validation",
    difficulty: "Easy",
  },
];
