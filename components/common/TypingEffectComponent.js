// import React, { useState, useEffect, useRef, useContext } from "react";
// import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { MarkDownComponent } from "@/components";

// const TypingEffectComponent = ({ responseStream, typingSpeed }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const typingTimeoutRef = useRef(null);

//   const animateText = (newText, currentIndex = 0) => {
//     if (currentIndex < newText.length) {
//       setDisplayedText(
//         (displayedText) => displayedText + newText[currentIndex]
//       );
//       typingTimeoutRef.current = setTimeout(() => {
//         animateText(newText, currentIndex + 1);
//       }, typingSpeed);
//     }
//   };

//   useEffect(() => {
//     const newTextToAnimate = responseStream.substring(displayedText.length);

//     if (newTextToAnimate.length > 0) {
//       animateText(newTextToAnimate);
//     }

//     return () => clearTimeout(typingTimeoutRef.current);
//   }, [responseStream]);

//   return (
//     <Markdown remarkPlugins={[remarkGfm]} components={MarkDownComponent}>
//       {displayedText}
//     </Markdown>
//   );
// };

// export default TypingEffectComponent;

import React, { useState, useEffect, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkDownComponent } from "@/components";

const TypingEffectComponent = ({ responseStream, typingSpeed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const currentIndexRef = useRef(0);
  const animationInProgressRef = useRef(false);

  useEffect(() => {
    const animateText = () => {
      if (currentIndexRef.current < responseStream.length) {
        setDisplayedText(
          responseStream.substring(0, currentIndexRef.current + 1)
        );

        currentIndexRef.current += 1;

        setTimeout(animateText, typingSpeed);
      } else {
        animationInProgressRef.current = false;
      }
    };

    if (
      !animationInProgressRef.current &&
      currentIndexRef.current < responseStream.length
    ) {
      animationInProgressRef.current = true;
      animateText();
    }
  }, [responseStream, typingSpeed]);

  useEffect(() => {
    return () => {
      animationInProgressRef.current = false;
    };
  }, []);

  return (
    <Markdown remarkPlugins={[remarkGfm]} components={MarkDownComponent}>
      {displayedText}
    </Markdown>
  );
};

export default TypingEffectComponent;
