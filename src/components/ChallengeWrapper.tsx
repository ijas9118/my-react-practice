import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { challengesMap } from "../utils/challenge-registry";
import ChallengeLayout from "../layout/ChallengeLayout";

const ChallengeWrapper: React.FC = () => {
  const { challengeId } = useParams<{ challengeId: string }>();
  const challenge = challengeId ? challengesMap[challengeId] : null;

  if (!challenge) return <div>Challenge not found</div>;

  const { Component } = challenge;

  return (
    <ChallengeLayout challenge={challenge}>
      <Suspense fallback={<div>Loading challenge...</div>}>
        <Component />
      </Suspense>
    </ChallengeLayout>
  );
};

export default ChallengeWrapper;
