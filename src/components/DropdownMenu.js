import React from "react";

export default function DropdownMenu(props) {
  const options = props.options;

  const handleMouseOver = () => {
    const outerContainer = document.getElementById("outer-container");
    outerContainer.style.display = "block";
  };

  const handleOptionClick = (option) => {
    const inputBox = document.getElementById("inputBox");
    inputBox.value = option;

    const outerContainer = document.getElementById("outer-container");
    outerContainer.style.display = "none";
  };

  return (
    <div className="dropdown ">
      <input
        id="inputBox"
        type="text"
        className="inputBox "
        placeholder="Programming Languages"
        readOnly
        onMouseOver={() => handleMouseOver()}
      />
      <div className="outer-container" id="outer-container">
        <div className="option-container">
          {options.map((option, index) => {
            return (
              <div
                className="option "
                key={`option-${index}`}
                onClick={() => handleOptionClick(option.language)}
              >
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
