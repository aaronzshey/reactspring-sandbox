import "./App.css";
import { useState, useEffect, CSSProperties } from "react";
import {
  useSpringRef,
  useTransition,
  AnimatedProps,
  animated,
} from "@react-spring/web";
import Page from "../components/Page";

const AnimatedPage = animated(Page);

function App() {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  const pages: ((
    props: AnimatedProps<{ style: CSSProperties }>,
  ) => React.ReactElement)[] = [
    ({ style }) => (
      <AnimatedPage style={{ ...style, background: "lightpink" }} />
    ),
    ({ style }) => (
      <AnimatedPage style={{ ...style, background: "lightblue" }} />
    ),
    ({ style }) => (
      <AnimatedPage style={{ ...style, background: "lightgreen" }} />
    ),
  ];

  return (
    <>
      <div id="wrapper" className="h-screen w-screen" onClick={onClick}>
        {transitions((style, i) => {
          const A = pages[i];
          return <A style={style} />;
        })}
      </div>
    </>
  );
}

export default App;
