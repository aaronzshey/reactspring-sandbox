import React, { CSSProperties } from "react";
import { animated, AnimatedProps } from "@react-spring/web";
export default function Page(
  props: AnimatedProps<{ style: CSSProperties; color: string }>,
) {
  return (
    <animated.div
      className="w-screen h-screen"
      style={{ ...props.style, backgroundColor: props.color }}
    >
      {props.children}
    </animated.div>
  );
}
