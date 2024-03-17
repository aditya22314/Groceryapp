// import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

const boxShadowStyles = {
  WebkitBoxShadow: "0px 0px 15px -7px rgba(66, 68, 90, 1)",
  MozBoxShadow: "0px 0px 15px -7px rgba(66, 68, 90, 1)",
  boxShadow: "0px 0px 15px -7px rgba(66, 68, 90, 1)",
};

const Container = ({ input, setinput, valid, setvalid, setinputs, inputs }) => {
  const [valuee, setvaluee] = useState(null);
  const ref = useRef();
  const divref = useRef();
  const check = useRef();
  const handleSubmit = () => {
    setvalid(input);

    setinputs([...inputs, input]);
    setinput([...input, input]);
    ref.current.value = "";
  };
  const handleKeyDown = (event) => {
    if (event.key == "Enter") {
      handleSubmit();
    }
  };
  const notify = () => {
    toast("Task Deleted", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [change, setchange] = useState(null);
  return (
    <>
      <div
        style={boxShadowStyles}
        className="w-[700px] h-[600px] bg-white relative   overflow-auto  "
      >
        <h3 className="text-center font-bold mt-6   text-3xl">Grocery Bud</h3>
        <div className="form-control flex justify-center mt-4  items-center h-4">
          <input
            style={{ backgroundColor: "#F1F5F8" }}
            type="text"
            className="w-[90%] ml-6 border-none outline-none rounded-md"
            placeholder="eg. eggs"
            onChange={(e) => setinput(e.target.value)}
            ref={ref}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-300 mr-2 rounded-r rounded-none     px-3 text-black hover:bg-blue-500 hover:text-white"
          >
            Submit
          </button>
        </div>
        <div className="mt-5 flex  flex-col w-[100%]  gap-2  absolute overflow-auto">
          {inputs.map((val, key) => {
            const handleDelete = (key) => {
              // console.log(key, "KEY");
              console.log(inputs, "ho");
              notify();
              const filter = inputs.filter((_, i) => i !== key);
              console.log(filter, "filter");
              setinputs(filter);
            };
            const handleEdit = (val, key) => {
              setchange(val);
              console.log(ref, "ref");
              divref.current.style.backgroundColor = "#ADF699 ";
              console.log(check, "OP");
              if (ref.current) {
                ref.current.value = val;
                if (
                  divref.current.style.backgroundColor === "rgb(173, 246, 153)"
                ) {
                  handleUpdate;
                }
              }
            };
            const handleUpdate = () => {
              const home = ref.current.value;
              return home;
            };
            return (
              <>
                <div key={key} className="flex flex-col ">
                  <div
                    ref={divref}
                    className=" w-[100%] flex justify-between items-center hover:bg-slate-100 rounded-md "
                  >
                    <div ref={check} className="p-2">
                      {change !== val ? val : handleEdit}
                    </div>
                    <div className="flex gap-3 items-center p-2">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        style={{ color: "green" }}
                        onClick={() => handleEdit(val, key)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "red" }}
                        onClick={() => handleDelete(key)}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Container;
