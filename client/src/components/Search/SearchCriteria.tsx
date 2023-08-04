import { useState } from "react";

import { ButtonToolbar, Button } from "react-bootstrap";

const SearchCriteria = () => {

    const [activeButton, setActiveButton] = useState("name"); // Make the first button active initially


    const buttons = [
        { value: "name", text: "Name" },
        { value: "specialization", text: "Specialization" },
        { value: "designation", text: "Designation" },
        { value: "currentWorkplace", text: "Current Workplace" },
        { value: "institute", text: "Institute" },
      ];
    
      const handleButtonClick = (buttonValue: any) => {
        setActiveButton(buttonValue);
      };

      return (
        <ButtonToolbar className="justify-content-between">
        {buttons.map((button) => (
          <Button
            key={button.value}
            variant={
              activeButton === button.value ? "primary" : "secondary"
            }
            onClick={() => handleButtonClick(button.value)}
          >
            {button.text}
          </Button>
        ))}
      </ButtonToolbar>
      )
}

export default SearchCriteria;