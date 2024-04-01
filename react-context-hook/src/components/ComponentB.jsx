import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

import ComponentC from "./ComponentC";

const ComponentB = () => {
  const user = useContext(UserContext);
  return (
    <section className="box">
      <h2>ComponentB</h2>
      <h2>{`How's it going ${user}`}</h2>
      <ComponentC />
    </section>
  );
};

export default ComponentB;
