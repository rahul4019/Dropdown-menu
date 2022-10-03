import React from "react";

export default function DropdownMenu(props) {
  const options = props.options;
  return (
    <div className="dropdown ">
      <input
        type="text"
        className="inputBox "
        placeholder="Programming Languages"
        readOnly
      />
      <div className="outer-container">
        <div className="option-container  ">
          {options.map((option, index) => {
            return (
              <div className="option " key={`option-${index}`}>
                <img src={option.logo} alt="" />

                {option.language}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
