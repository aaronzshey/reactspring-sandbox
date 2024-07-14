import "./App.css";
import { useState, useEffect, CSSProperties } from "react";
import { useSpringRef, useTransition } from "@react-spring/web";
import Page from "../components/Page";

function App() {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 1, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(-50%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  const colors: string[] = ["red", "red", "red"];

  /*



  */
  return (
    <>
      <div id="wrapper" className="h-screen w-screen" onClick={onClick}>
        {transitions((style, i) => {
          return (
            <Page style={style} color={colors[i]}>
              asdfasdf
            </Page>
          );
        })}
      </div>
    </>
  );
}

export default App;
