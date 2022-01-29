import React from "react";
import { RoughNotation } from "react-rough-notation";

interface HighlightProps {
  color: string;
  children: any;
}

export const RainbowHighlight: React.FC<HighlightProps> = ({
  color,
  children,
}) => {
  const animationDuration = Math.floor(30 * children.length);
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
