import React, { CSSProperties } from "react";
import { animated, AnimatedProps } from "@react-spring/web";

export default function Page(
  props: AnimatedProps<{
    style: CSSProperties;
  }>,
) {
  return (
    <animated.div
      className="w-screen h-screen"
      style={{ ...props.style }}
    ></animated.div>
  );
}
