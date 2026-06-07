"use client"
import { useState } from "react";
import MockTestPlayer from "./MockTestPlayer";
import MockTestResult from "./MockTestResult";
import MockTestVerify from "./MockTestVerify";
import MockTestSolutions from "./MockTestSolutions";

export default function MockTestApp({ test }) {
  const [phase, setPhase] = useState("playing"); // playing | result | verify | solutions
  const [student, setStudent] = useState(null);
  const [finalAnswers, setFinalAnswers] = useState({});

  function handleComplete(answers) {
    setFinalAnswers(answers);
    setPhase("result");
  }

  function handleViewSolutions() {
    setPhase("verify");
  }

  function handleVerified(studentData) {
    setStudent(studentData);
    setPhase("solutions");
  }

  if (phase === "playing") {
    return <MockTestPlayer test={test} onComplete={handleComplete} />;
  }

  if (phase === "result") {
    return (
      <MockTestResult
        test={test}
        answers={finalAnswers}
        student={student}
        onViewSolutions={handleViewSolutions}
      />
    );
  }

  if (phase === "verify") {
    return (
      <MockTestVerify
        test={test}
        answers={finalAnswers}
        onVerified={handleVerified}
      />
    );
  }

  if (phase === "solutions") {
    return (
      <MockTestSolutions
        test={test}
        answers={finalAnswers}
        student={student}
      />
    );
  }

  return null;
}
