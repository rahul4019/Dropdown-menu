import React from "react";

export default function DropdownMenu(props) {
  const options = props.options;
  const outerContainer = document.getElementById("outer-container");
  const menuIcon = document.getElementById("menu-indicator");

  const handleMouseOver = () => {
    outerContainer.style.display = "block";
    menuIcon.style.rotate = "-180deg";
  };

  const handleMouseLeave = () => {
    menuIcon.style.rotate = "0deg";
    outerContainer.style.display = "none";
  };

  const handleOptionClick = (option) => {
    const inputBox = document.getElementById("inputBox");
    inputBox.value = option;
    outerContainer.style.display = "none";
  };

  return (
    <div className="dropdown ">
      <div className="input-container">
        <input
          id="inputBox"
          type="text"
          className="inputBox "
          placeholder="Programming Languages"
          readOnly
          onMouseOver={() => handleMouseOver()}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
          // alt="down-icon"
          id="menu-indicator"
        />
      </div>
      <div
        className="outer-container"
        id="outer-container"
        onMouseLeave={() => handleMouseLeave()}
      >
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
