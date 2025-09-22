import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";

const challengeMap: Record<string, React.LazyExoticComponent<React.FC>> = {
  "countdown-timer": lazy(() => import("../challenges/countdown-timer/CountdownTimer")),
};

const ChallengeWrapper: React.FC = () => {
  const { challengeId } = useParams<{ challengeId: string }>();
  const Component = challengeId && challengeMap[challengeId];

  if (!Component) return <div>Challenge not found</div>;

  return (
    <Suspense fallback={<div>Loading challenge...</div>}>
      <Component />
    </Suspense>
  );
};

export default ChallengeWrapper;
