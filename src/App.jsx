import { useState } from "react";
import "./App.css";
import Container from "./pages/Container";

function App() {
  const [input, setinput] = useState("");
  const [inputs, setinputs] = useState([]);
  const [valid, setvalid] = useState(null);
  console.log(valid, "valid");
  return (
    <>
      <section
        style={{ backgroundColor: "#F1F5F8" }}
        className="flex justify-center items-center  w-full  h-full "
      >
        <Container
          setinput={setinput}
          inputs={inputs}
          input={input}
          setinputs={setinputs}
          valid={valid}
          setvalid={setvalid}
        />
      </section>
    </>
  );
}

export default App;
