import "./App.css";
import { useState, useEffect, CSSProperties } from "react";
import {
  useSpringRef,
  useTransition,
  AnimatedProps,
  animated,
} from "@react-spring/web";
import Page from "../components/Page";

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
    ({ style }) => <Page style={{ ...style, background: "lightpink" }}></Page>,
    ({ style }) => <Page style={{ ...style, background: "lightblue" }}></Page>,
    ({ style }) => <Page style={{ ...style, background: "lightgreen" }}></Page>,
  ];

  return (
    <>
      <div id="wrapper" className="h-screen w-screen" onClick={onClick}>
        {transitions((style, i) => {
          const Page = pages[i];
          return <Page style={style} />;
        })}
      </div>
    </>
  );
}

export default App;
