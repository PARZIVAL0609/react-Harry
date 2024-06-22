import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Dhruv",
    class: "10F",
  };

  const [state, setState] = useState(s1);

  const update = ()=>{
    setTimeout(() => {
        setState({
            name: "Parzival",
            class: "A",
        })
    }, 1000);
  }

  return (
    <noteContext.Provider value={{state, update}}>{props.children}</noteContext.Provider>
  );
};

export default NoteState;
