import { ButtonToolbar, Button } from "react-bootstrap";

const SearchCriteria = (props: any) => {
    const buttons = [
        { value: "name", text: "Name" },
        { value: "specialization", text: "Specialization" },
        { value: "designation", text: "Designation" },
        { value: "currentWorkplace", text: "Current Workplace" },
        { value: "institute", text: "Institute" },
      ];
    
      const handleButtonClick = (buttonValue: string) => {
        props.handleSelectCriteria(buttonValue);
      };

      return (
        <ButtonToolbar className="justify-content-between">
        {buttons.map((button) => (
          <Button
            key={props.searchCriteria}
            variant={
              props.searchCriteria === button.value ? "primary" : "secondary"
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