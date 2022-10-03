import React from "react";

export default function DropdownMenu(props) {
  const options = props.options;

  // handles the mouse over event on the input tag to expand options container
  const handleMouseOver = () => {
    const outerContainer = document.getElementById("outer-container");
    const menuIcon = document.getElementById("menu-indicator");
    outerContainer.style.display = "block";
    menuIcon.style.rotate = "-180deg";
  };

  // handles mouse leave event on the options container to collapse menu
  const handleMouseLeave = () => {
    const outerContainer = document.getElementById("outer-container");
    const menuIcon = document.getElementById("menu-indicator");
    menuIcon.style.rotate = "0deg";
    outerContainer.style.display = "none";
  };

  // handles the selection of menu option
  const handleOptionClick = (option) => {
    const inputBox = document.getElementById("inputBox");
    inputBox.value = option;

    const outerContainer = document.getElementById("outer-container");
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
