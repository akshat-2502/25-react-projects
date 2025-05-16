import { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelection = (id) => {
    let copyArray = [...multiple];
    const indexOfId = copyArray.indexOf(id);
    if (indexOfId === -1) copyArray.push(id);
    else copyArray.splice(indexOfId, 1);
    setMultiple(copyArray);
  };

  console.log(multiple);

  return (
    <div className="wrapper">
      <h1 className="text-5xl p-10">Accordian Single and Multiple</h1>
      <button
        onClick={() => {
          setEnableMultiple(!enableMultiple);
          setSelected(null);
          setMultiple([]);
        }}
      >
        {enableMultiple ? "Enable Single Selection" : "Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item">
              <div className="title">
                <h3>{item.question}</h3>
                <span
                  className="plus"
                  onClick={() =>
                    enableMultiple
                      ? handleMultipleSelection(item.id)
                      : handleSingleSelection(item.id)
                  }
                >
                  {enableMultiple
                    ? multiple.includes(item.id)
                      ? "-"
                      : "+"
                    : selected === item.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {enableMultiple
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};
export default Accordian;
