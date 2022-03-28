import TextTransition, { presets } from "react-text-transition";
import React, { useState, useEffect } from "react";

const Text = ["Contact us!", "Write us!", "Call us!", "Ask us!"];

const DynamicTxt = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={Text[index % Text.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
};

export default DynamicTxt;
