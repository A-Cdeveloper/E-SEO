"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Headline from "../_components/ui/Headline";
import ContentBox from "../_components/ui/ContentBox";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  console.log(error);

  return (
    <div className="pt-8 lg:pt-32">
      <Headline>404</Headline>
      <ContentBox extraClass="mb-16">
        <p>{error.message || "Something went wrong."}</p>
        <button onClick={() => reset()}>Try again</button>
      </ContentBox>
    </div>
  );
}
