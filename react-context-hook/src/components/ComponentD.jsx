import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

const ComponentD = () => {
  const user = useContext(UserContext);
  return (
    <section className="box">
      <h2>ComponentD</h2>
      <h2>{`Bye ${user}`}</h2>
    </section>
  );
};

export default ComponentD;
