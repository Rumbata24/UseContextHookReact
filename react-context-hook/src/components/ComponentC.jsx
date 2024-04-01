import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

import ComponentD from "./ComponentD";

const ComponentC = () => {
  const user = useContext(UserContext)
  return (
    <section className="box">
      <h2>ComponentC</h2>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD />
    </section>
  );
};

export default ComponentC;
