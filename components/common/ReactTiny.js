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

  // const corsAnywhereUrl = "http://localhost:8080";

  return (
    <div className={`${isLoading ? "hidden" : "block"}`}>
      <ReactTinyLink
        cardSize="small"
        showGraphic={true}
        maxLine={1}
        minLine={1}
        url={url}
        proxyUrl={process.env.CORS_URL}
        onSuccess={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ReactTiny;
