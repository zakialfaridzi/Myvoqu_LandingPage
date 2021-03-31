import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div>
        <h1>Hey some async call in progress ! </h1>
      </div>
    )
  );
};

export default Loading;
