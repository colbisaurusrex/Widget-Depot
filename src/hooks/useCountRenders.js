import { useRef } from "react";

const useCountRenders = (componentName) => {
  const renders = useRef(0);
  console.log(componentName, "renders: ", renders.current++);
};

export default useCountRenders;
