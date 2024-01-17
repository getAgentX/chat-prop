import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactTinyLink = dynamic(
  () => {
    return import("react-tiny-link").then((mod) => mod.ReactTinyLink);
  },
  { ssr: false }
);

const ReactTiny = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  const corsAnywhereUrl = process.env.NEXT_PUBLIC_CORS_URL;

  return (
    <>
      {isLoading && (
        <div role="status" className="w-full px-6 mx-auto animate-pulse">
          <div className="w-56 h-2 mb-4 rounded-full bg-foreground"></div>
          <div className="mb-2.5 h-2 max-w-sm rounded-full bg-foreground"></div>
          <div className="mb-2.5 h-2 rounded-full bg-foreground"></div>
          <div className="mb-2.5 h-2 max-w-2xl w-full rounded-full bg-foreground"></div>
          <div className="mb-2.5 h-2 max-w-xl w-full rounded-full bg-foreground"></div>
          <div className="h-2 max-w-xs rounded-full bg-foreground"></div>
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <div className={`${isLoading ? "hidden" : "block"}`}>
        <ReactTinyLink
          cardSize="small"
          showGraphic={true}
          maxLine={1}
          minLine={1}
          url={url}
          proxyUrl={corsAnywhereUrl}
          onSuccess={() => setIsLoading(false)}
        />
      </div>
    </>
  );
};

export default ReactTiny;
