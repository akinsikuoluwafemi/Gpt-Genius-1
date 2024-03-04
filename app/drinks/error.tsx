"use client";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.log({ error: error.message });
  return <div>There was an error...</div>;
};
